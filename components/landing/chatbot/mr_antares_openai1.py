#!/usr/bin/env python
"""
Mr. Antares - Asistente Virtual para Antares Innovate (Versión Web)

Este script está adaptado para facilitar la integración de Mr. Antares en el sitio web de 
Antares Innovate. Mantiene las funcionalidades principales pero elimina dependencias
de terminal y agrega métodos para facilitar la integración en un entorno web.

Características:
- Soporte para API de OpenAI (con fallback a respuestas predefinidas)
- Análisis contextual para respuestas más precisas
- Sistema de clasificación de intenciones y entidades
- Gestión de sesiones de conversación
- Documentación detallada para facilitar la integración

INSTRUCCIONES PARA DESARROLLADORES FRONTEND:
Este archivo contiene principalmente la lógica del backend. 
Para usarlo necesitarás:
1. Configurar un servidor web (FastAPI/Flask) que exponga endpoints para el chat
2. Usar este código como la lógica principal de procesamiento de mensajes
3. Implementar la interfaz de usuario en tu framework web preferido
"""

import os
import json
import random
import re
import asyncio
import logging
from datetime import datetime
from typing import Dict, List, Optional, Any, Tuple, Union

# Configurar logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger("mr_antares")

# Intentar cargar dotenv si está disponible
try:
    from dotenv import load_dotenv
    load_dotenv()
    logger.info("Dotenv cargado correctamente")
except ImportError:
    logger.info("Dotenv no instalado, ignorando")

# Importación opcional de dependencias avanzadas
try:
    import nltk
    from nltk.tokenize import word_tokenize
    from nltk.corpus import stopwords
    
    # Intentar descargar recursos necesarios si no existen
    try:
        nltk.data.find('tokenizers/punkt')
    except LookupError:
        try:
            nltk.download('punkt', quiet=True)
        except:
            pass
            
    try:
        nltk.data.find('corpora/stopwords')
    except LookupError:
        try:
            nltk.download('stopwords', quiet=True)
        except:
            pass
    
    NLTK_AVAILABLE = True
    logger.info("NLTK disponible y configurado")
except ImportError:
    NLTK_AVAILABLE = False
    logger.info("NLTK no disponible, se usará análisis básico")

# Importación opcional de OpenAI API
try:
    import openai
    OPENAI_AVAILABLE = True
    logger.info("OpenAI SDK disponible")
except ImportError:
    OPENAI_AVAILABLE = False
    logger.info("OpenAI SDK no disponible, se usará HTTP requests")

# Configuraciones globales
CONFIG = {
    "context_memory": 10,        # Número de mensajes que se recuerdan para análisis contextual
    "openai_model": "gpt-3.5-turbo",  # Modelo de OpenAI por defecto (puedes cambiarlo a gpt-4)
    "request_timeout": 30,       # Timeout para peticiones a la API en segundos
    "max_tokens": 600,           # Máximo de tokens para respuestas de OpenAI
    "temperature": 0.7,          # Temperatura para generación (0.0-1.0, menor = más determinista)
    "debug_mode": False          # Modo de depuración
}

# Sistema de análisis contextual avanzado
class ContextAnalyzer:
    """Analizador de contexto para mejorar las respuestas."""
    
    def __init__(self):
        """Inicializa el analizador de contexto."""
        self.recent_intents = []
        self.recent_topics = set()
        self.conversation_state = "initial"  # initial, inquiry, detailed, closing
        self.topic_keywords = {
            "automation": ["automatización", "automatizar", "rpa", "bpa", "robot", "flujo", "chatbot", "proceso"],
            "marketing": ["marketing", "digital", "redes", "seo", "sem", "publicidad", "campaña", "branding"],
            "real_estate": ["inmobiliaria", "propiedad", "bienes raíces", "casa", "edificio", "terreno", "alquiler"],
            "pricing": ["precio", "costo", "tarifa", "inversión", "presupuesto", "cuánto cuesta", "pago"],
            "implementation": ["implementar", "instalar", "comenzar", "integrar", "desarrollar", "tiempo"],
            "benefits": ["beneficio", "ventaja", "roi", "retorno", "ahorro", "eficiencia", "mejora"]
        }
        
    def extract_topics(self, message: str) -> List[str]:
        """Extrae temas principales del mensaje usando análisis léxico."""
        # Convertir a minúsculas para comparación
        message = message.lower()
        
        # Detectar temas basados en palabras clave
        detected_topics = []
        
        for topic, keywords in self.topic_keywords.items():
            for keyword in keywords:
                if keyword in message:
                    detected_topics.append(topic)
                    break
        
        # Si hay NLTK, hacer análisis más sofisticado
        if NLTK_AVAILABLE and not detected_topics:
            try:
                # Tokenizar y eliminar stopwords
                tokens = word_tokenize(message, language='spanish')
                stop_words = set(stopwords.words('spanish'))
                filtered_tokens = [word for word in tokens if word.isalnum() and word not in stop_words]
                
                # Detectar temas adicionales basados en frecuencia de palabras
                for topic, keywords in self.topic_keywords.items():
                    relevance = sum(1 for keyword in keywords for token in filtered_tokens if keyword in token)
                    if relevance > 0 and topic not in detected_topics:
                        detected_topics.append(topic)
            except Exception as e:
                logger.warning(f"Error en análisis NLTK: {str(e)}")
        
        return detected_topics
    
    def analyze_message(self, message: str, intent: str) -> Dict[str, Any]:
        """Analiza un mensaje para actualizar el contexto de la conversación."""
        # Actualizar intenciones recientes
        self.recent_intents.append(intent)
        if len(self.recent_intents) > CONFIG["context_memory"]:
            self.recent_intents.pop(0)
        
        # Extraer y actualizar temas
        topics = self.extract_topics(message)
        self.recent_topics.update(topics)
        
        # Actualizar estado de la conversación
        if len(self.recent_intents) <= 2:
            self.conversation_state = "initial"
        elif "farewell" in self.recent_intents[-3:]:
            self.conversation_state = "closing"
        elif len(self.recent_topics) >= 3 or any(intent in ["pricing", "demo"] for intent in self.recent_intents[-3:]):
            self.conversation_state = "detailed"
        else:
            self.conversation_state = "inquiry"
        
        return {
            "topics": list(self.recent_topics),
            "state": self.conversation_state,
            "primary_intent": intent
        }
    
    def get_enhanced_response(self, response: str, context: Dict[str, Any]) -> str:
        """Mejora la respuesta basada en el contexto actual."""
        # En modo inicial, mantener respuestas amigables y abiertas
        if context["state"] == "initial":
            return response
            
        # En estado de cierre, ser breve y cordial
        if context["state"] == "closing":
            # Si la respuesta es muy larga, acortarla
            if len(response) > 200:
                sentences = re.split(r'(?<=[.!?])\s+', response)
                return ' '.join(sentences[:2])
            return response
            
        # En consulta detallada, añadir información específica si es relevante
        if context["state"] == "detailed":
            # Si habla de precios y automatización, añadir detalles de ROI
            if "pricing" in context["primary_intent"] and "automation" in context["topics"]:
                extra_info = " Nuestros clientes suelen ver un retorno de inversión en 6-8 meses con nuestras soluciones de automatización."
                return response + extra_info
            
            # Si habla de implementación, añadir tiempo estimado
            if "implementation" in context["topics"]:
                extra_info = " El tiempo promedio de implementación es de 4-6 semanas, dependiendo de la complejidad."
                return response + extra_info
                
        return response

# Definir respuestas predefinidas para el modo sin conexión
FALLBACK_RESPONSES = {
    "greeting": [
        "¡Hola! Soy Mr. Antares, el asistente virtual de Antares Innovate. Estoy aquí para ayudarte con información sobre nuestros servicios de automatización, marketing digital y soluciones inmobiliarias. ¿En qué puedo ayudarte hoy?",
        "¡Bienvenido a Antares Innovate! Soy Mr. Antares, tu asistente virtual especializado en soluciones de automatización, marketing digital y servicios inmobiliarios. ¿Cómo puedo asistirte hoy?",
        "¡Saludos! Soy Mr. Antares, el asistente virtual de Antares Innovate. Me especializo en proporcionar información sobre nuestras soluciones de automatización, marketing digital y servicios para el sector inmobiliario. ¿En qué área te gustaría recibir más información?"
    ],
    "farewell": [
        "¡Gracias por contactar con Antares Innovate! Ha sido un placer asistirte. Si tienes más preguntas en el futuro, no dudes en volver a escribirnos. ¡Hasta pronto!",
        "Ha sido un placer poder ayudarte hoy. Recuerda que en Antares Innovate estamos siempre disponibles para asesorarte en soluciones de automatización, marketing digital y servicios inmobiliarios. ¡Hasta pronto!",
        "Gracias por tu interés en Antares Innovate. Espero haberte sido de ayuda. Si necesitas más información sobre cómo nuestras soluciones pueden transformar tu negocio, no dudes en contactarnos nuevamente. ¡Hasta luego!"
    ],
    "automation": [
        "En Antares Innovate, la automatización es nuestra especialidad. Ofrecemos soluciones integrales que incluyen: Automatización de Procesos Empresariales (BPA), Automatización Robótica de Procesos (RPA), Integración de Sistemas, Desarrollo de Flujos de Trabajo y Chatbots personalizados. Nuestros clientes han logrado reducir costos operativos hasta en un 40% y eliminar errores en procesos críticos. ¿Hay alguna área específica que te interese explorar más a fondo?",
        "La automatización es el corazón de Antares Innovate. Nuestras soluciones transforman procesos manuales en flujos digitales optimizados mediante tecnologías como RPA, workflows automatizados, integraciones entre sistemas y asistentes virtuales. Esto permite a nuestros clientes reducir costos operativos, minimizar errores y liberar tiempo valioso de sus equipos. ¿Qué tipo de procesos te gustaría automatizar?",
        "Nuestra especialidad en Antares Innovate es la automatización inteligente, donde combinamos tecnologías avanzadas para optimizar la operación de tu empresa: automatización de procesos, robots de software (RPA), integración de sistemas, workflows automáticos y chatbots avanzados. Nuestros clientes suelen ver resultados en las primeras semanas de implementación. ¿Qué procesos te gustaría optimizar en tu organización?"
    ],
    "marketing": [
        "Nuestros servicios de Marketing Digital están diseñados para aumentar la visibilidad online y generar conversiones para tu negocio. Ofrecemos estrategias de SEO/SEM, gestión de redes sociales, email marketing, análisis de datos y publicidad digital. Todo esto respaldado por métricas claras y reportes de resultados. ¿Te gustaría conocer más sobre alguno de estos servicios específicos?",
        "En Antares Innovate desarrollamos estrategias de Marketing Digital personalizadas según los objetivos de cada cliente. Nuestros servicios incluyen posicionamiento en buscadores, campañas de publicidad online, gestión de contenidos para redes sociales, email marketing y análisis de resultados. ¿Cuáles son tus objetivos de marketing digital actualmente?",
        "Nuestro enfoque de Marketing Digital se basa en resultados medibles. Trabajamos con estrategias multicanal que incluyen SEO, SEM, redes sociales y email marketing, todas optimizadas según los datos de comportamiento de tu audiencia. Esto nos permite maximizar el retorno de la inversión en marketing. ¿Qué canales de marketing digital estás utilizando actualmente?"
    ],
    "real_estate": [
        "Para el sector inmobiliario ofrecemos soluciones digitales especializadas que transforman la forma de operar de agencias y profesionales. Esto incluye sistemas de gestión de propiedades, marketing digital especializado para bienes raíces, automatización de procesos inmobiliarios y análisis de datos para optimizar operaciones y ventas. ¿Hay algún área específica que te interese explorar para potenciar tu negocio inmobiliario?",
        "Nuestras soluciones para el sector inmobiliario están diseñadas para transformar digitalmente todos los aspectos del negocio: gestión eficiente del inventario de propiedades, automatización de tareas repetitivas, estrategias de marketing digital especializado y analítica para tomar mejores decisiones. ¿Qué desafíos enfrenta actualmente tu negocio inmobiliario?",
        "Entendemos los desafíos específicos del sector inmobiliario. Por eso hemos desarrollado un ecosistema digital que incluye gestión centralizada de propiedades, marketing especializado, automatización de procesos y herramientas analíticas. Nuestros clientes inmobiliarios han logrado aumentar sus ventas hasta en un 35% y reducir tareas administrativas en un 70%. ¿Qué aspectos de tu operación inmobiliaria te gustaría mejorar?"
    ],
    "pricing": [
        "Nuestras soluciones se adaptan a cada negocio, por lo que trabajamos con un modelo de precios personalizado. Como referencia, la implementación de RPA (robots software) comienza desde $5,000 USD, los proyectos de automatización de procesos desde $10,000 USD, y el desarrollo de chatbots desde $3,000 USD. Podemos preparar una cotización detallada basada en tus necesidades específicas. ¿Te gustaría agendar una llamada con uno de nuestros consultores?",
        "Ofrecemos diferentes modelos de inversión: proyectos completos (desde $5,000 USD), suscripciones mensuales (desde $1,500 USD) y pago por uso para chatbots. Cada solución se cotiza individualmente según tus necesidades. ¿Te gustaría que un asesor te contacte para una evaluación inicial sin costo?",
        "Nuestros planes se adaptan a distintos presupuestos: desde soluciones iniciales (desde $8,000 USD) hasta implementaciones empresariales completas. Todos nuestros proyectos incluyen ROI estimado y métricas de éxito claras. ¿Te gustaría una evaluación inicial sin compromiso para identificar oportunidades en tu organización?"
    ],
    "demo": [
        "Me encantaría mostrarte en acción nuestras soluciones. Ofrecemos una demostración personalizada donde analizamos un proceso específico de tu organización, mostramos cómo automatizarlo y calculamos el ROI potencial. La demo dura aproximadamente 60 minutos. Para agendar, necesitaríamos tu nombre, cargo, empresa y proceso que te interesa automatizar. ¿Te gustaría programar esta demostración?",
        "Nada mejor que ver nuestras soluciones en acción. Nuestra demostración personalizada incluye diagnóstico rápido de un proceso específico de tu empresa, demostración en vivo de soluciones aplicadas a casos similares y estimación de tiempos y ROI. La sesión dura entre 45-60 minutos. ¿Te gustaría agendar esta demo gratuita?",
        "Te invito a conocer el poder de nuestras soluciones con una demostración personalizada donde nuestros especialistas analizarán uno de tus procesos actuales y mostrarán cómo optimizarlo. La demo está diseñada para ser práctica y enfocada en tus necesidades específicas. ¿Te gustaría coordinar esta sesión gratuita de 60 minutos?"
    ],
    "default": [
        "En Antares Innovate nos especializamos en soluciones de automatización, marketing digital y servicios para el sector inmobiliario. ¿En qué área específica estás interesado?",
        "Gracias por tu mensaje. Nuestro enfoque principal es la automatización de procesos empresariales, aunque también brindamos servicios de marketing digital y soluciones para inmobiliarias. ¿Cómo podemos ayudarte específicamente?",
        "Entendemos que cada negocio es único, por eso nuestras soluciones son personalizadas. Analizamos tus procesos actuales para identificar oportunidades de mejora e implementamos tecnologías que eliminan tareas repetitivas, reducen errores y aumentan la eficiencia. ¿Te gustaría conocer más sobre alguno de nuestros servicios?"
    ]
}

class MrAntaresWeb:
    """Cliente para Mr. Antares adaptado para entornos web."""
    
    def __init__(self, session_id: str = None, api_key: Optional[str] = None, use_fallback: bool = False):
        """
        Inicializa el cliente de Mr. Antares para web.
        
        Args:
            session_id: Identificador único de la sesión de chat
            api_key: Clave API de OpenAI (opcional)
            use_fallback: Si es True, usa respuestas predefinidas aunque haya API key
        """
        # Inicializar con ID de sesión
        self.session_id = session_id or f"session_{datetime.now().strftime('%Y%m%d%H%M%S')}_{random.randint(1000, 9999)}"
        
        # Obtener API key de argumentos, variables de entorno o archivo de configuración
        self.api_key = api_key or os.environ.get("OPENAI_API_KEY")
        self.use_fallback = use_fallback or not self.api_key
        
        # Si no hay API key, activar modo de reserva automáticamente
        if not self.api_key:
            self.use_fallback = True
            logger.warning("No se ha encontrado una clave API de OpenAI. Usando modo de respuestas predefinidas.")
        
        # Inicializar analizador de contexto para respuestas más precisas
        self.context_analyzer = ContextAnalyzer()
        
        # Información del sistema para el chatbot Mr. Antares
        self.system_info = """
Eres Mr. Antares, el asistente virtual especializado de Antares Innovate.

SOBRE ANTARES INNOVATE:
Antares Innovate es una empresa que ofrece soluciones en tres áreas principales:
1. AUTOMATIZACIÓN (especialidad principal): Incluye BPA (Automatización de Procesos de Negocio), RPA (Automatización Robótica de Procesos), integración de sistemas, flujos de trabajo automatizados y desarrollo de chatbots.
2. MARKETING DIGITAL: Estrategias de SEO/SEM, gestión de redes sociales, email marketing y análisis de datos.
3. SERVICIOS INMOBILIARIOS: Sistemas de gestión de propiedades, marketing para bienes raíces y automatización de procesos inmobiliarios.

PRECIOS REFERENCIALES:
- Implementación de RPA: Proyectos desde $5,000 USD, licencias anuales desde $8,000 USD
- Automatización de procesos: Desde $10,000 USD según complejidad
- Chatbots: Implementación básica desde $3,000 USD, versiones avanzadas desde $8,000 USD

CONTACTO:
- Email: info@antaresinnovate.com
- Web: www.antaresinnovate.com

Tu tono debe ser profesional pero amigable. Explica los conceptos técnicos de manera clara y sencilla. Enfoca tus respuestas en cómo las soluciones de Antares Innovate pueden resolver problemas específicos de negocio con ejemplos concretos.

Tus respuestas deben ser concisas pero informativas, con un promedio de 4-6 oraciones. Usa viñetas o listas numeradas cuando sea apropiado para mejorar la legibilidad.

IMPORTANTE: Si te preguntan por un precio específico que no conoces, no inventes cifras. Proporciona los rangos generales mencionados arriba y sugiere agendar una consulta para una cotización personalizada.
"""
        
        # Historial de la conversación
        self.conversation_history = []
        
        # Contador de mensajes para identificación
        self.message_counter = 0
        
        # Configurar cliente OpenAI si está disponible
        if OPENAI_AVAILABLE and self.api_key:
            openai.api_key = self.api_key
    
    def _classify_intent(self, message: str) -> str:
        """
        Clasifica la intención del mensaje del usuario para respuestas locales.
        
        Args:
            message: Mensaje del usuario
            
        Returns:
            Categoría de intención detectada
        """
        message = message.lower()
        
        # Palabras clave para cada categoría (ampliadas para mejor detección)
        keywords = {
            "greeting": ["hola", "buenas", "saludos", "buen día", "buenos días", "buenas tardes", "buenas noches", "hi", "hello", "qué tal", "cómo estás", "encantado", "mucho gusto"],
            "farewell": ["adiós", "chao", "hasta luego", "bye", "nos vemos", "gracias por todo", "me voy", "hasta pronto", "hasta mañana", "que tengas", "me despido", "terminamos"],
            "automation": ["automatización", "automatizar", "rpa", "bpa", "robot", "flujo", "workflow", "proceso", "chatbot", "automatizado", "bot", "digital", "digitalización", "optimizar", "eficiencia"],
            "marketing": ["marketing", "digital", "redes sociales", "seo", "sem", "publicidad", "promoción", "ventas", "email", "campaña", "anuncio", "posicionamiento", "leads", "conversión", "tráfico"],
            "real_estate": ["inmobiliaria", "inmobiliario", "propiedad", "bienes raíces", "casa", "departamento", "edificio", "terreno", "vivienda", "hogar", "apartamento", "agencia", "agente", "compra", "venta", "alquiler"],
            "pricing": ["precio", "costo", "tarifa", "valor", "inversión", "presupuesto", "cuánto cuesta", "cuanto vale", "pagar", "pagamos", "económico", "barato", "caro", "cotización", "cotizar", "descuento"],
            "demo": ["demo", "demostración", "mostrar", "presentación", "ver", "reunión", "meeting", "prueba", "cita", "agendar", "agendar", "calendario", "disponibilidad", "horario", "contacta", "llamar"],
            "benefits": ["beneficio", "ventaja", "retorno", "roi", "ganar", "utilidad", "ahorrar", "mejorar", "optimizar", "resultados", "éxito", "experiencia", "ejemplo", "casos", "cliente"],
            "support": ["ayuda", "soporte", "problema", "error", "dificultad", "falla", "no funciona", "roto", "asistencia", "técnico", "servicio", "atención"]
        }
        
        # Patrones de frases para intenciones específicas (expresiones regulares)
        intent_patterns = {
            "pricing": [
                r'cu[aá]nto (cuesta|vale|cobran)',
                r'precio de',
                r'(costo|valor) (aproximado|estimado)',
                r'(qu[eé]|cu[aá]l) (ser[ií]a|es) (el|la) (precio|inversi[oó]n|costo)'
            ],
            "demo": [
                r'(podemos|posible|pueden) (agendar|programar|coordinar)',
                r'(me gustar[ií]a|quisiera) (ver|una) (demo|demostraci[oó]n)',
                r'(c[oó]mo|d[oó]nde) (puedo|podemos) (ver|conocer) (m[aá]s|ejemplo)',
                r'(qui[eé]n|c[oó]mo) (me puede|nos puede|podr[ií]a) (contactar|llamar)'
            ],
            "benefits": [
                r'(cu[aá]les|qu[eé]) (son|ser[ií]an) (los|las) (beneficios|ventajas)',
                r'(c[oó]mo|qu[eé]) (mejora|optimiza|ayuda)',
                r'qu[eé] (resultados|retorno|roi) (puedo|podemos) (esperar|obtener)',
                r'(c[oó]mo|en qu[eé]) (me|nos) (beneficia|ayuda|mejora)'
            ]
        }
        
        # Verificar patrones de expresiones regulares primero (mayor precisión)
        for intent, patterns in intent_patterns.items():
            for pattern in patterns:
                if re.search(pattern, message, re.IGNORECASE):
                    return intent
        
        # Buscar coincidencias en palabras clave
        matched_categories = {}
        
        for category, words in keywords.items():
            # Usar coincidencia de palabras exactas
            exact_matches = sum(1 for word in words if re.search(rf'\b{word}\b', message))
            
            # Usar coincidencia de palabras parciales (con menor peso)
            partial_matches = sum(0.5 for word in words if word in message and not re.search(rf'\b{word}\b', message))
            
            # Combinar resultados
            total_matches = exact_matches + partial_matches
            
            if total_matches > 0:
                matched_categories[category] = total_matches
        
        # Si no hay coincidencias, usar análisis de contexto para determinar la intención
        if not matched_categories:
            # Verificar mensajes cortos que pueden ser seguimiento de conversación
            if len(message.split()) <= 5:
                return "follow_up"
            return "default"
        
        # Devolver la categoría con más coincidencias
        return max(matched_categories.items(), key=lambda x: x[1])[0]
    
    def _get_fallback_response(self, message: str) -> str:
        """
        Genera una respuesta basada en reglas para cuando no hay API disponible.
        
        Args:
            message: Mensaje del usuario
            
        Returns:
            Respuesta generada
        """
        # Detectar la intención del mensaje
        intent = self._classify_intent(message)
        
        # Obtener análisis contextual para respuestas más precisas
        context_info = self.context_analyzer.analyze_message(message, intent)
        
        # Mensajes de seguimiento
        if intent == "follow_up" and len(self.conversation_history) >= 2:
            # Obtener la última intención no de seguimiento
            previous_intents = [msg.get("intent", "default") for msg in self.conversation_history 
                                if msg.get("role") == "user" and "intent" in msg 
                                and msg.get("intent") != "follow_up"]
            
            if previous_intents:
                last_main_intent = previous_intents[-1]
                intent = last_main_intent
                
                # Respuestas para seguimientos sobre temas específicos
                follow_up_responses = {
                    "automation": [
                        "Exactamente. Nuestras soluciones de automatización están diseñadas para adaptarse a las necesidades específicas de cada empresa. En tu caso, podríamos comenzar por analizar qué procesos consumen más tiempo y recursos.",
                        "Para ser más específico, la automatización que implementamos puede reducir tiempos operativos hasta en un 70% y eliminar errores humanos en procesos críticos. Esto se traduce en ahorros significativos.",
                        "Un punto importante a considerar es que nuestras soluciones de automatización se integran con tus sistemas actuales, lo que minimiza la curva de aprendizaje y maximiza el retorno de inversión."
                    ],
                    "pricing": [
                        "Comprendo tu interés en los costos. Cada proyecto es único, pero puedo decirte que muchos de nuestros clientes recuperan su inversión en automatización en un plazo de 6-8 meses gracias a los ahorros generados.",
                        "Para darte una respuesta más precisa sobre costos, necesitaríamos evaluar brevemente tus necesidades específicas. ¿Te gustaría agendar una llamada de evaluación sin compromiso?",
                        "Además de los rangos de precios mencionados, ofrecemos opciones de financiamiento que hacen más accesible la implementación inicial. Esto permite que los ahorros mensuales compensen el costo desde el primer momento."
                    ],
                    "marketing": [
                        "Efectivamente. Nuestras estrategias de marketing digital se basan en datos y están orientadas a resultados medibles. Cada campaña se optimiza continuamente para maximizar el ROI.",
                        "Un aspecto clave de nuestro enfoque de marketing es la integración con tus sistemas de ventas, lo que permite medir con precisión el impacto de cada acción y ajustar en tiempo real.",
                        "Para complementar lo anterior, nuestras estrategias de marketing incluyen componentes de automatización que permiten personalizar la comunicación a escala, mejorando significativamente las tasas de conversión."
                    ],
                    "real_estate": [
                        "Exacto. El sector inmobiliario presenta desafíos únicos que nuestras soluciones abordan específicamente, como la gestión de múltiples propiedades, seguimiento de clientes potenciales y automatización de comunicaciones.",
                        "Un beneficio adicional para las inmobiliarias es la integración de nuestros sistemas con portales de propiedades, lo que elimina la duplicación de esfuerzos y mantiene la información actualizada en todos los canales.",
                        "Nuestros clientes del sector inmobiliario han reportado un aumento promedio del 35% en sus ventas después de implementar nuestras soluciones, gracias a la optimización de procesos y mejor seguimiento de leads."
                    ]
                }
                
                # Si hay respuestas de seguimiento para la intención principal, usarlas
                if intent in follow_up_responses:
                    return random.choice(follow_up_responses[intent])
            
        # Si es necesario confirmar una solicitud como pedir una demo o contacto
        confirmation_needed = False
        if intent in ["demo", "pricing"] and "?" in message:
            confirmation_needed = True
        
        # Seleccionar una respuesta de la categoría correspondiente
        responses = FALLBACK_RESPONSES.get(intent, FALLBACK_RESPONSES["default"])
        response = random.choice(responses)
        
        # Personalizar respuesta según contexto previo
        if len(self.conversation_history) > 2:
            enhanced_response = self.context_analyzer.get_enhanced_response(response, context_info)
            response = enhanced_response
            
        # Para preguntas específicas sobre precios, servicios o implementación
        if intent == "pricing" and any(word in message.lower() for word in ["chatbot", "bot", "asistente"]):
            return "Para un chatbot como yo, el desarrollo inicial suele estar entre $3,000 y $8,000 USD dependiendo de la complejidad. Un chatbot básico con respuestas predefinidas está en el rango inferior, mientras que soluciones avanzadas con integración a sistemas, IA avanzada y capacidades transaccionales están en el rango superior. El tiempo de implementación suele ser de 4-6 semanas."
            
        if intent == "automation" and "tiempo" in message.lower() and "implementación" in message.lower():
            return "El tiempo de implementación de nuestras soluciones de automatización varía según el alcance del proyecto. Para proyectos de tamaño mediano, el tiempo promedio es de 6-8 semanas, dividido en fases: análisis (1-2 semanas), desarrollo (3-4 semanas), pruebas (1 semana) e implementación final (1-2 semanas). Trabajamos con metodologías ágiles que permiten ver resultados incrementales durante el proceso."
            
        # Añadir confirmación si es necesario
        if confirmation_needed:
            response += " ¿Te gustaría proceder con esto?"
            
        return response
    
    async def get_response_openai(self, message: str) -> str:
        """
        Obtiene una respuesta usando la API de OpenAI.
        
        Args:
            message: Mensaje del usuario
            
        Returns:
            Respuesta generada por OpenAI
        """
        # Intención para análisis contextual
        intent = self._classify_intent(message)
        
        # Preparar la lista de mensajes para la API
        messages = [
            {"role": "system", "content": self.system_info}
        ]
        
        # Incluir información contextual para mejorar la respuesta
        context_info = {
            "recent_topics": list(self.context_analyzer.recent_topics),
            "conversation_state": self.context_analyzer.conversation_state,
            "intent_history": self.context_analyzer.recent_intents[-5:] if self.context_analyzer.recent_intents else []
        }
        
        context_prompt = f"""
Información adicional para esta conversación:
- Intención detectada: {intent}
- Temas recientes: {', '.join(context_info['recent_topics']) if context_info['recent_topics'] else 'Ninguno aún'}
- Estado de conversación: {context_info['conversation_state']}

Usa esta información para dar una respuesta más precisa y personalizada. Mantén tu respuesta concisa pero informativa.
"""
        
        messages.append({"role": "system", "content": context_prompt})
        
        # Agregar los últimos mensajes del historial (o menos si hay menos)
        last_messages = []
        for msg in self.conversation_history[-CONFIG["context_memory"]:]:
            if "role" in msg and "content" in msg:
                last_messages.append({"role": msg["role"], "content": msg["content"]})
        
        messages.extend(last_messages)
        
        try:
            # Usar SDK si está disponible
            if OPENAI_AVAILABLE:
                completion = await openai.ChatCompletion.acreate(
                    model=CONFIG["openai_model"],
                    messages=messages,
                    max_tokens=CONFIG["max_tokens"],
                    temperature=CONFIG["temperature"],
                    presence_penalty=0.3,  # Evitar repeticiones
                    frequency_penalty=0.3  # Variedad en las respuestas
                )
                return completion.choices[0].message.content
            
            # Fallback a petición HTTP si no está el SDK
            else:
                import requests
                
                response = requests.post(
                    "https://api.openai.com/v1/chat/completions",
                    headers={
                        "Content-Type": "application/json",
                        "Authorization": f"Bearer {self.api_key}"
                    },
                    json={
                        "model": CONFIG["openai_model"],
                        "messages": messages,
                        "max_tokens": CONFIG["max_tokens"],
                        "temperature": CONFIG["temperature"],
                        "presence_penalty": 0.3,
                        "frequency_penalty": 0.3
                    },
                    timeout=CONFIG["request_timeout"]
                )
                
                if response.status_code == 200:
                    response_data = response.json()
                    return response_data["choices"][0]["message"]["content"]
                else:
                    raise Exception(f"Error API OpenAI: {response.status_code} - {response.text}")
                
        except Exception as e:
            logger.error(f"Error al comunicarse con la API de OpenAI: {str(e)}")
            # En caso de error, volver a respuestas predefinidas
            return self._get_fallback_response(message)
    
    async def get_response(self, message: str) -> Dict[str, Any]:
        """
        Obtiene una respuesta para el mensaje del usuario.
        
        Args:
            message: Mensaje del usuario
            
        Returns:
            Diccionario con la respuesta y metadatos
        """
        # Incrementar contador de mensajes
        self.message_counter += 1
        
        # Detectar la intención para guardarla en el historial
        intent = self._classify_intent(message)
        
        # Agregar el mensaje del usuario al historial con la intención
        user_message = {
            "id": f"{self.session_id}_{self.message_counter}",
            "role": "user", 
            "content": message,
            "timestamp": datetime.now().isoformat(),
            "intent": intent
        }
        self.conversation_history.append(user_message)
        
        # Hora de inicio para medir tiempo de respuesta
        start_time = datetime.now()
        
        # Obtener respuesta (API o fallback)
        if not self.use_fallback and self.api_key:
            response_text = await self.get_response_openai(message)
            response_mode = "openai"
        else:
            response_text = self._get_fallback_response(message)
            response_mode = "fallback"
        
        # Tiempo de proceso
        process_time_ms = (datetime.now() - start_time).total_seconds() * 1000
        
        # Agregar la respuesta al historial
        bot_message = {
            "id": f"{self.session_id}_{self.message_counter}_response",
            "role": "assistant", 
            "content": response_text,
            "timestamp": datetime.now().isoformat(),
            "mode": response_mode,
            "intent": intent,
            "process_time_ms": process_time_ms
        }
        self.conversation_history.append(bot_message)
        
        # Devolver respuesta enriquecida con metadatos
        return {
            "response": response_text,
            "session_id": self.session_id,
            "message_id": bot_message["id"],
            "intent": intent,
            "mode": response_mode,
            "process_time_ms": process_time_ms
        }
    
    def to_dict(self) -> Dict[str, Any]:
        """
        Convierte el estado actual del chatbot a un diccionario para serialización.
        
        Returns:
            Estado serializable del chatbot para guardar
        """
        return {
            "session_id": self.session_id,
            "conversation_history": self.conversation_history,
            "message_counter": self.message_counter,
            "context": {
                "recent_intents": self.context_analyzer.recent_intents,
                "recent_topics": list(self.context_analyzer.recent_topics),
                "conversation_state": self.context_analyzer.conversation_state
            },
            "use_fallback": self.use_fallback,
            "timestamp": datetime.now().isoformat()
        }
    
    @classmethod
    def from_dict(cls, data: Dict[str, Any], api_key: Optional[str] = None) -> 'MrAntaresWeb':
        """
        Crea una instancia de MrAntaresWeb a partir de un diccionario.
        
        Args:
            data: Diccionario con el estado del chatbot
            api_key: Clave API de OpenAI (opcional)
            
        Returns:
            Instancia de MrAntaresWeb con el estado restaurado
        """
        instance = cls(
            session_id=data.get("session_id"),
            api_key=api_key,
            use_fallback=data.get("use_fallback", False)
        )
        
        # Restaurar historial
        instance.conversation_history = data.get("conversation_history", [])
        instance.message_counter = data.get("message_counter", 0)
        
        # Restaurar contexto
        context_data = data.get("context", {})
        instance.context_analyzer.recent_intents = context_data.get("recent_intents", [])
        instance.context_analyzer.recent_topics = set(context_data.get("recent_topics", []))
        instance.context_analyzer.conversation_state = context_data.get("conversation_state", "initial")
        
        return instance

"""
RECOMENDACIONES DE IMPLEMENTACIÓN PARA DESARROLLADORES FRONTEND

1. INTEGRACIÓN EN SITIO WEB:

   a) Componente React para el chatbot:
   ```jsx
   const MrAntaresChat = () => {
     const [messages, setMessages] = useState([]);
     const [input, setInput] = useState('');
     const [sessionId, setSessionId] = useState(null);
     const [isTyping, setIsTyping] = useState(false);
     
     // Lógica para enviar/recibir mensajes...
     
     return (
       <div className="mr-antares-chat">
         <div className="chat-header">
           <img src="/path/to/robot-icon.svg" alt="Mr. Antares" />
           <h3>Mr. Antares</h3>
         </div>
         <div className="chat-messages">
           {messages.map(msg => (
             <div key={msg.id} className={`message ${msg.role}`}>
               {msg.content}
             </div>
           ))}
           {isTyping && <div className="typing-indicator">...</div>}
         </div>
         <div className="chat-input">
           <input 
             type="text"
             value={input}
             onChange={(e) => setInput(e.target.value)}
             onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
             placeholder="Pregúntame algo..."
           />
           <button onClick={sendMessage}>Enviar</button>
         </div>
       </div>
     );
   };
   ```

2. API ENDPOINTS NECESARIOS:

   a) Iniciar nueva conversación:
   ```
   POST /api/mr-antares/session
   Response: { session_id: "session_123456" }
   ```
   
   b) Enviar mensaje:
   ```
   POST /api/mr-antares/message
   Body: { session_id: "session_123456", message: "Hola, ¿qué servicios ofrecen?" }
   Response: { 
     response: "¡Hola! Soy Mr. Antares...", 
     session_id: "session_123456",
     intent: "greeting",
     message_id: "msg_789"
   }
   ```
   
   c) Opcional - Efecto de escritura gradual:
   ```
   Para simular escritura en tiempo real, divide la respuesta en chunks y envíalos
   de forma progresiva mediante WebSockets o Server-Sent Events (SSE).
   ```

3. PERSISTENCIA DE SESIONES:

   a) Guardar en localStorage para visitantes recurrentes:
   ```javascript
   // Guardar sesión actual
   const saveSession = (sessionId, messages) => {
     localStorage.setItem('mrAntaresSession', JSON.stringify({
       sessionId,
       messages,
       timestamp: new Date().toISOString()
     }));
   };
   
   // Recuperar sesión anterior al cargar la página
   const loadSession = () => {
     const savedSession = localStorage.getItem('mrAntaresSession');
     if (savedSession) {
       const session = JSON.parse(savedSession);
       // Verificar si la sesión no ha expirado (ej: 24 horas)
       const expiryTime = new Date(session.timestamp);
       expiryTime.setHours(expiryTime.getHours() + 24);
       
       if (new Date() < expiryTime) {
         return session;
       }
     }
     return null;
   };
   ```

4. CARACTERÍSTICAS ADICIONALES:

   a) Botón para iniciar chat:
   ```html
   <button 
     id="mr-antares-trigger"
     className="chat-trigger-button"
     onClick={() => setChatVisible(true)}
   >
     <img src="/path/to/robot-icon.svg" alt="Chat con Mr. Antares" />
   </button>
   ```
   
   b) Minimizar/Maximizar chat:
   ```jsx
   const [minimized, setMinimized] = useState(false);
   
   // En el componente:
   <div className={`mr-antares-container ${minimized ? 'minimized' : ''}`}>
     <div className="chat-header">
       <button onClick={() => setMinimized(!minimized)}>
         {minimized ? 'Maximizar' : 'Minimizar'}
       </button>
     </div>
     
     {!minimized && (
       // Contenido del chat
     )}
   </div>
   ```
   
   c) Indicar disponibilidad de agente humano:
   ```jsx
   // Añadir botón para contactar a un humano
   <button 
     className="human-agent-button"
     onClick={requestHumanAgent}
   >
     Hablar con un agente
   </button>
   
   // Función para solicitar agente humano
   const requestHumanAgent = () => {
     // Enviar mensaje al backend para notificar
     fetch('/api/mr-antares/request-human', {
       method: 'POST',
       body: JSON.stringify({ session_id: sessionId })
     });
     
     // Informar al usuario
     setMessages(msgs => [
       ...msgs, 
       {
         id: 'system_msg',
         role: 'assistant',
         content: 'He notificado a nuestro equipo. Un agente se pondrá en contacto contigo pronto.'
       }
     ]);
   };
   ```
"""

# Ejemplo de implementación básica de un endpoint FastAPI
# Esta sección es ilustrativa y puede eliminarse en la versión de producción
if __name__ == "__main__":
    # Este código sirve como ejemplo para mostrar cómo se usaría en un servidor API
    
    print("Mr. Antares Web - Módulo Importado Correctamente")
    print("NOTA: Para usar en producción, importa este archivo y utiliza la clase MrAntaresWeb")
    
    # Ejemplo de cómo integrar con FastAPI
    try:
        from fastapi import FastAPI, HTTPException, BackgroundTasks, Depends
        from pydantic import BaseModel
        import uvicorn
        import uuid
        
        # Inicializar FastAPI
        app = FastAPI(title="Mr. Antares API")
        
        # Modelo para solicitud de mensaje
        class ChatRequest(BaseModel):
            message: str
            session_id: Optional[str] = None
        
        # Almacén de sesiones activas (en producción usar Redis, base de datos, etc.)
        active_sessions = {}
        
        # Endpoint para procesar mensajes
        @app.post("/api/chat")
        async def process_message(request: ChatRequest):
            session_id = request.session_id or f"session_{uuid.uuid4().hex}"
            
            # Obtener o crear chatbot para esta sesión
            if session_id in active_sessions:
                bot = active_sessions[session_id]
            else:
                bot = MrAntaresWeb(session_id=session_id)
                active_sessions[session_id] = bot
            
            # Procesar mensaje
            result = await bot.get_response(request.message)
            return result
        
        # Iniciar servidor si se ejecuta directamente
        if __name__ == "__main__":
            print("Iniciando servidor de demostración en http://localhost:8000")
            print("Endpoints disponibles:")
            print("  - POST /api/chat")
            uvicorn.run(app, host="0.0.0.0", port=8000)
            
    except ImportError:
        print("FastAPI no está instalado. Este ejemplo es puramente ilustrativo.")
        print("Para instalar las dependencias: pip install fastapi uvicorn")