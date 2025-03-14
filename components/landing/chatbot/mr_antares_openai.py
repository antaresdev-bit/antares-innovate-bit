#!/usr/bin/env python
"""
Mr. Antares - Asistente Virtual para Antares Innovate

Este script implementa el asistente virtual Mr. Antares con soporte para:
- Interacción con la API de OpenAI (si hay una clave disponible)
- Modo de respuestas predefinidas avanzado con análisis contextual
- Simulación de escritura y tiempos de respuesta humanos
- Guardado y carga de conversaciones
- Interfaz de chat en terminal con formato mejorado
- Análisis semántico de consultas sin necesidad de comillas
"""

import sys
import os
import asyncio
import json
import requests
import random
import argparse
import time
import re
import shlex
from datetime import datetime, timedelta
from typing import Dict, List, Optional, Any, Tuple

# Cargar variables de entorno desde .env si existe
try:
    from dotenv import load_dotenv
    load_dotenv()
except ImportError:
    pass  # dotenv no es esencial, ignorar si no está instalado

# Importar NLTK si está disponible para análisis de texto más avanzado
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
except ImportError:
    NLTK_AVAILABLE = False

# Configurar colores para la terminal
class Colors:
    HEADER = '\033[95m'
    BLUE = '\033[94m'
    GREEN = '\033[92m'
    YELLOW = '\033[93m'
    RED = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'
    
# Configuraciones globales
CONFIG = {
    "min_response_time": 1.0,       # Tiempo mínimo de respuesta en segundos
    "max_response_time": 3.5,       # Tiempo máximo de respuesta en segundos
    "char_typing_speed": 0.01,      # Tiempo por carácter al "escribir" (20 caracteres por segundo)
    "show_typing": True,            # Mostrar efecto de "escribiendo..."
    "context_memory": 10,           # Número de mensajes que se recuerdan para análisis contextual
    "thinking_messages": [          # Mensajes que se muestran mientras "piensa"
        "Analizando su consulta...",
        "Procesando información...",
        "Buscando la mejor respuesta...",
        "Considerando opciones...",
        "Elaborando respuesta...",
        "Consultando base de conocimiento..."
    ]
}

# Utilidades para simular escritura humana
def simulate_thinking(message_length=None):
    """Simula un tiempo de "pensamiento" proporcional a la complejidad del mensaje."""
    base_time = random.uniform(CONFIG["min_response_time"], CONFIG["max_response_time"])
    
    # Si se proporciona longitud, ajustar tiempo según la complejidad
    if message_length:
        # Añadir tiempo adicional para mensajes largos
        complexity_factor = min(message_length / 100, 2.0)  # Max 2x tiempo para mensajes largos
        thinking_time = base_time * (1.0 + (complexity_factor * 0.5))
    else:
        thinking_time = base_time
    
    # Mostrar indicador de "pensando"
    if CONFIG["show_typing"]:
        thinking_message = random.choice(CONFIG["thinking_messages"])
        print(f"\n{Colors.YELLOW}[{thinking_message}]{Colors.ENDC}", end="", flush=True)
        
        # Simular "pensamiento" con puntos
        steps = int(thinking_time / 0.3)
        for _ in range(steps):
            print(".", end="", flush=True)
            time.sleep(0.3)
        print("\r" + " " * (len(thinking_message) + 15), end="\r", flush=True)
    else:
        time.sleep(thinking_time)

def simulate_typing(text, speed_variation=0.3):
    """Simula el efecto de escritura progresiva con velocidad variable."""
    if not CONFIG["show_typing"]:
        print(f"\n{Colors.GREEN}Mr. Antares:{Colors.ENDC} {text}")
        return
        
    print(f"\n{Colors.GREEN}Mr. Antares:{Colors.ENDC} ", end="", flush=True)
    
    # Dividir en grupos de palabras para simular pausas naturales
    words = text.split()
    chunks = []
    current_chunk = []
    
    for word in words:
        current_chunk.append(word)
        
        # Crear chunks de 3-5 palabras (simula flujo natural de escritura)
        if len(current_chunk) >= random.randint(3, 5) or word[-1] in ['.', '!', '?']:
            chunks.append(' '.join(current_chunk))
            current_chunk = []
    
    if current_chunk:
        chunks.append(' '.join(current_chunk))
    
    # Imprimir cada chunk con pausas naturales
    for i, chunk in enumerate(chunks):
        # Pausa entre chunks (simula pensar la siguiente frase)
        if i > 0:
            time.sleep(random.uniform(0.2, 0.6))
        
        # Imprimir cada caracter con velocidad variable
        for char in chunk:
            # Variación de velocidad para simular tipeo humano
            char_speed = CONFIG["char_typing_speed"] * (1 + random.uniform(-speed_variation, speed_variation))
            
            # Pausas más largas después de puntuación
            if char in ['.', ',', '!', '?', ':', ';']:
                char_speed *= 2
                
            print(char, end="", flush=True)
            time.sleep(char_speed)
        
        # Espacio entre chunks
        if i < len(chunks) - 1:
            print(" ", end="", flush=True)

# Sistema de análisis contextual avanzado
class ContextAnalyzer:
    """Analizador de contexto para mejorar las respuestas locales."""
    
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
        
    def extract_topics(self, message):
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
        if NLTK_AVAILABLE and detected_topics:
            try:
                # Tokenizar y eliminar stopwords
                tokens = word_tokenize(message, language='spanish')
                stop_words = set(stopwords.words('spanish'))
                filtered_tokens = [word for word in tokens if word.isalnum() and word not in stop_words]
                
                # Detectar temas adicionales basados en frecuencia de palabras
                # Este es un enfoque simple; podría mejorarse con TF-IDF o embeddings
                for topic, keywords in self.topic_keywords.items():
                    relevance = sum(1 for keyword in keywords for token in filtered_tokens if keyword in token)
                    if relevance > 0 and topic not in detected_topics:
                        detected_topics.append(topic)
            except Exception:
                pass  # Si hay errores en NLTK, usar solo el enfoque simple
        
        return detected_topics
    
    def analyze_message(self, message, intent):
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
    
    def get_enhanced_response(self, response, context):
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

class MrAntaresOpenAI:
    """Cliente para Mr. Antares con soporte para OpenAI y respuestas locales."""
    
    def __init__(self, api_key: Optional[str] = None, use_fallback: bool = False, typing_simulation: bool = True):
        """
        Inicializa el cliente de Mr. Antares.
        
        Args:
            api_key: Clave API de OpenAI (opcional)
            use_fallback: Si es True, usa respuestas predefinidas aunque haya API key
            typing_simulation: Si es True, simula tiempos de respuesta humanos
        """
        # Obtener API key de argumentos, variables de entorno o archivo de configuración
        self.api_key = api_key or os.environ.get("OPENAI_API_KEY")
        self.use_fallback = use_fallback or not self.api_key
        
        # Si no hay API key, activar modo de reserva automáticamente
        if not self.api_key:
            self.use_fallback = True
            print(f"{Colors.YELLOW}No se ha encontrado una clave API de OpenAI. Usando modo de respuestas predefinidas.{Colors.ENDC}")
        
        # Inicializar analizador de contexto para respuestas más precisas
        self.context_analyzer = ContextAnalyzer()
        
        # Configurar simulación de escritura
        CONFIG["show_typing"] = typing_simulation
        
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
    
    async def get_response(self, message: str) -> str:
        """
        Obtiene una respuesta para el mensaje del usuario.
        
        Args:
            message: Mensaje del usuario
            
        Returns:
            Respuesta generada
        """
        # Incrementar contador de mensajes
        self.message_counter += 1
        
        # Detectar la intención para guardarla en el historial
        intent = self._classify_intent(message)
        
        # Agregar el mensaje del usuario al historial con la intención
        self.conversation_history.append({
            "id": self.message_counter,
            "role": "user", 
            "content": message,
            "timestamp": datetime.now().isoformat(),
            "intent": intent
        })
        
        # Simular tiempo de pensamiento proporcional a la longitud del mensaje
        simulate_thinking(len(message))
        
        # Si estamos en modo fallback, usar respuestas predefinidas
        if self.use_fallback:
            response = self._get_fallback_response(message)
            
            # Agregar la respuesta al historial
            self.conversation_history.append({
                "id": self.message_counter,
                "role": "assistant", 
                "content": response,
                "timestamp": datetime.now().isoformat(),
                "mode": "fallback",
                "intent": intent
            })
            
            # Simular escritura humana
            simulate_typing(response)
            
            return response
        
        # Si tenemos API key, usar OpenAI
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
        
        # Agregar los últimos 10 mensajes del historial (o menos si hay menos)
        last_messages = []
        for msg in self.conversation_history:
            if "role" in msg and "content" in msg:
                last_messages.append({"role": msg["role"], "content": msg["content"]})
        
        if len(last_messages) <= 10:
            messages.extend(last_messages)
        else:
            messages.extend(last_messages[-10:])
        
        try:
            # Hacer la petición a la API
            response = requests.post(
                "https://api.openai.com/v1/chat/completions",
                headers={
                    "Content-Type": "application/json",
                    "Authorization": f"Bearer {self.api_key}"
                },
                json={
                    "model": "gpt-3.5-turbo",  # Puedes cambiarlo a gpt-4 si lo tienes disponible
                    "messages": messages,
                    "temperature": 0.7,
                    "presence_penalty": 0.3,   # Evitar repeticiones
                    "frequency_penalty": 0.3   # Variedad en las respuestas
                },
                timeout=30  # Timeout de 30 segundos
            )
            
            # Verificar si la respuesta fue exitosa
            if response.status_code == 200:
                response_data = response.json()
                content = response_data["choices"][0]["message"]["content"]
                
                # Agregar la respuesta al historial
                self.conversation_history.append({
                    "id": self.message_counter,
                    "role": "assistant", 
                    "content": content,
                    "timestamp": datetime.now().isoformat(),
                    "mode": "openai",
                    "intent": intent
                })
                
                # Simular escritura humana
                simulate_typing(content)
                
                return content
            else:
                # Error en la API, usar respuesta de fallback
                error_message = f"Error de API (Código {response.status_code}): {response.text}"
                print(f"{Colors.RED}{error_message}{Colors.ENDC}")
                
                print(f"{Colors.YELLOW}Cambiando a modo de respuestas predefinidas...{Colors.ENDC}")
                fallback_response = self._get_fallback_response(message)
                
                # Agregar la respuesta al historial
                self.conversation_history.append({
                    "id": self.message_counter,
                    "role": "assistant", 
                    "content": fallback_response,
                    "timestamp": datetime.now().isoformat(),
                    "mode": "fallback",
                    "error": error_message,
                    "intent": intent
                })
                
                # Simular escritura humana
                simulate_typing(fallback_response)
                
                return fallback_response
                
        except Exception as e:
            # Error de conexión o tiempo de espera, usar respuesta de fallback
            error_message = f"Error al comunicarse con la API de OpenAI: {str(e)}"
            print(f"{Colors.RED}{error_message}{Colors.ENDC}")
            
            print(f"{Colors.YELLOW}Cambiando a modo de respuestas predefinidas...{Colors.ENDC}")
            fallback_response = self._get_fallback_response(message)
            
            # Agregar la respuesta al historial
            self.conversation_history.append({
                "id": self.message_counter,
                "role": "assistant", 
                "content": fallback_response,
                "timestamp": datetime.now().isoformat(),
                "mode": "fallback",
                "error": error_message,
                "intent": intent
            })
            
            # Simular escritura humana
            simulate_typing(fallback_response)
            
            return fallback_response
    
    def save_conversation(self, filename: str = "mr_antares_conversation.json") -> bool:
        """
        Guarda la conversación actual en un archivo JSON.
        
        Args:
            filename: Nombre del archivo donde guardar la conversación
            
        Returns:
            True si se guardó correctamente, False en caso contrario
        """
        try:
            with open(filename, 'w', encoding='utf-8') as f:
                json.dump({
                    "conversation": self.conversation_history,
                    "metadata": {
                        "saved_at": datetime.now().isoformat(),
                        "total_messages": self.message_counter,
                        "mode": "fallback" if self.use_fallback else "openai"
                    }
                }, f, indent=2, ensure_ascii=False)
            
            print(f"{Colors.GREEN}Conversación guardada en {filename}{Colors.ENDC}")
            return True
        except Exception as e:
            print(f"{Colors.RED}Error al guardar la conversación: {str(e)}{Colors.ENDC}")
            return False
    
    def load_conversation(self, filename: str = "mr_antares_conversation.json") -> bool:
        """
        Carga una conversación desde un archivo JSON.
        
        Args:
            filename: Nombre del archivo desde donde cargar la conversación
            
        Returns:
            True si se cargó correctamente, False en caso contrario
        """
        try:
            if not os.path.exists(filename):
                print(f"{Colors.YELLOW}Archivo de conversación {filename} no encontrado.{Colors.ENDC}")
                return False
            
            with open(filename, 'r', encoding='utf-8') as f:
                data = json.load(f)
            
            if "conversation" in data:
                self.conversation_history = data["conversation"]
                if "metadata" in data and "total_messages" in data["metadata"]:
                    self.message_counter = data["metadata"]["total_messages"]
                else:
                    # Si no hay contador de mensajes, usar el máximo ID encontrado
                    message_ids = [msg.get("id", 0) for msg in self.conversation_history if isinstance(msg, dict)]
                    self.message_counter = max(message_ids) if message_ids else len(self.conversation_history)
                
                print(f"{Colors.GREEN}Conversación cargada desde {filename}: {len(self.conversation_history)} mensajes{Colors.ENDC}")
                return True
        except Exception as e:
            print(f"{Colors.RED}Error al cargar la conversación: {str(e)}{Colors.ENDC}")
        
        return False


async def interactive_chat(api_key: Optional[str] = None, use_fallback: bool = False, 
                           load_file: Optional[str] = None, save_file: Optional[str] = None):
    """
    Inicia un chat interactivo con Mr. Antares en la terminal.
    
    Args:
        api_key: Clave API de OpenAI (opcional)
        use_fallback: Si es True, usa respuestas predefinidas aunque haya API key
        load_file: Archivo desde donde cargar una conversación previa (opcional)
        save_file: Archivo donde guardar la conversación al terminar (opcional)
    """
    # Banner de bienvenida
    print("\n" + "=" * 70)
    print(f"{Colors.BOLD}MR. ANTARES - ASISTENTE VIRTUAL DE ANTARES INNOVATE{Colors.ENDC}".center(70))
    print("=" * 70)
    print(f"{Colors.GREEN}Iniciando asistente virtual...{Colors.ENDC}")
    
    # Inicializar el cliente de Mr. Antares
    mr_antares = MrAntaresOpenAI(api_key=api_key, use_fallback=use_fallback)
    
    # Cargar conversación previa si se especificó
    if load_file:
        mr_antares.load_conversation(load_file)
    
    # Mostrar modo de operación
    if mr_antares.use_fallback:
        print(f"{Colors.YELLOW}Modo de operación: Respuestas predefinidas (sin conexión a OpenAI){Colors.ENDC}")
    else:
        print(f"{Colors.GREEN}Modo de operación: Conectado a OpenAI API{Colors.ENDC}")
    
    # Instrucciones para el usuario
    print("\nEscribe tus mensajes y presiona Enter para enviar.")
    print("Comandos disponibles:")
    print("  /salir, /exit - Terminar la conversación")
    print("  /guardar [archivo] - Guardar la conversación")
    print("  /modo - Cambiar entre modo OpenAI y respuestas predefinidas")
    print("  /typing on/off - Activar/desactivar simulación de escritura")
    print("  /ayuda - Mostrar esta ayuda")
    print("=" * 70 + "\n")
    
    try:
        # Saludar al iniciar si no hay conversación previa
        if not load_file or not mr_antares.conversation_history:
            greeting = await mr_antares.get_response("Hola, ¿puedes presentarte?")
        
        while True:
            # Recibir mensaje del usuario
            user_input = input(f"\n{Colors.BLUE}Tú:{Colors.ENDC} ")
            
            # Verificar comandos especiales
            if user_input.lower() in ["/exit", "/salir", "exit", "salir", "quit"]:
                # Generar mensaje de despedida
                farewell = await mr_antares.get_response("Me despido.")
                print(f"\n{Colors.BOLD}Finalizando conversación...{Colors.ENDC}")
                break
                
            elif user_input.lower() == "/modo":
                # Cambiar modo de operación
                mr_antares.use_fallback = not mr_antares.use_fallback
                mode_msg = "respuestas predefinidas" if mr_antares.use_fallback else "OpenAI API"
                print(f"\n{Colors.YELLOW}[Sistema] Cambiado a modo: {mode_msg}{Colors.ENDC}")
                continue
                
            elif user_input.lower().startswith("/typing"):
                # Cambiar modo de simulación de escritura
                parts = user_input.lower().split()
                if len(parts) > 1:
                    if parts[1] in ["on", "true", "1", "yes", "y"]:
                        CONFIG["show_typing"] = True
                        print(f"\n{Colors.YELLOW}[Sistema] Simulación de escritura activada{Colors.ENDC}")
                    elif parts[1] in ["off", "false", "0", "no", "n"]:
                        CONFIG["show_typing"] = False
                        print(f"\n{Colors.YELLOW}[Sistema] Simulación de escritura desactivada{Colors.ENDC}")
                continue
                
            elif user_input.lower().startswith("/guardar"):
                # Extraer nombre de archivo si se proporciona
                parts = user_input.split(maxsplit=1)
                filename = parts[1] if len(parts) > 1 else "mr_antares_conversation.json"
                
                # Guardar conversación
                mr_antares.save_conversation(filename)
                continue
                
            elif user_input.lower() in ["/ayuda", "/help", "/?", "/h"]:
                # Mostrar ayuda
                print("\nComandos disponibles:")
                print("  /salir, /exit - Terminar la conversación")
                print("  /guardar [archivo] - Guardar la conversación")
                print("  /modo - Cambiar entre modo OpenAI y respuestas predefinidas")
                print("  /typing on/off - Activar/desactivar simulación de escritura")
                print("  /ayuda - Mostrar esta ayuda")
                continue
                
            elif not user_input.strip():
                # Ignorar mensajes vacíos
                continue
            
            # Procesar mensaje normal (sin necesidad de mostrar "Procesando mensaje...")
            response = await mr_antares.get_response(user_input)
    
    except KeyboardInterrupt:
        print(f"\n\n{Colors.YELLOW}[Conversación interrumpida por el usuario]{Colors.ENDC}")
    except Exception as e:
        print(f"\n{Colors.RED}[Error] {str(e)}{Colors.ENDC}")
    finally:
        # Guardar conversación si se especificó un archivo
        if save_file:
            mr_antares.save_conversation(save_file)
        
        print(f"\n{Colors.BOLD}¡Gracias por usar Mr. Antares!{Colors.ENDC}")


async def get_single_response(message: str, api_key: Optional[str] = None, use_fallback: bool = False,
                           show_typing: bool = True) -> str:
    """
    Obtiene una sola respuesta de Mr. Antares.
    
    Args:
        message: Mensaje del usuario
        api_key: Clave API de OpenAI (opcional)
        use_fallback: Si es True, usa respuestas predefinidas aunque haya API key
        show_typing: Si es True, simula escritura humana
        
    Returns:
        Respuesta generada
    """
    # Configurar simulación de escritura
    CONFIG["show_typing"] = show_typing
    
    # Inicializar cliente y obtener respuesta
    mr_antares = MrAntaresOpenAI(api_key=api_key, use_fallback=use_fallback)
    response = await mr_antares.get_response(message)
    return response


async def main():
    """Función principal para procesar argumentos y ejecutar el modo adecuado."""
    parser = argparse.ArgumentParser(description="Mr. Antares - Asistente Virtual para Antares Innovate")
    parser.add_argument("message", nargs="*", help="Mensaje para enviar a Mr. Antares (sin necesidad de comillas)")
    parser.add_argument("--api-key", "-k", help="Clave API de OpenAI (también se puede establecer en variable de entorno OPENAI_API_KEY)")
    parser.add_argument("--fallback", "-f", action="store_true", help="Usar modo de respuestas predefinidas (sin OpenAI)")
    parser.add_argument("--save", "-s", help="Guardar conversación en archivo")
    parser.add_argument("--load", "-l", help="Cargar conversación desde archivo")
    parser.add_argument("--no-typing", "-n", action="store_true", help="Desactivar simulación de escritura")
    
    args = parser.parse_args()
    
    if args.message:
        # Modo de respuesta única - juntar palabras sin necesidad de comillas
        full_message = " ".join(args.message)
        response = await get_single_response(
            full_message, 
            api_key=args.api_key, 
            use_fallback=args.fallback,
            show_typing=not args.no_typing
        )
    else:
        # Modo de chat interactivo
        await interactive_chat(
            api_key=args.api_key,
            use_fallback=args.fallback,
            load_file=args.load,
            save_file=args.save
        )


# Para permitir ejecución simple sin quotation marks
def run_as_script():
    """Ejecuta el asistente desde la línea de comandos con comandos sin comillas."""
    # Si se ejecuta como ./mr_antares_openai.py mensaje sin comillas
    if len(sys.argv) > 1 and not sys.argv[1].startswith('-'):
        # Extraer todos los argumentos que no comienzan con - como parte del mensaje
        message_parts = []
        other_args = []
        
        for arg in sys.argv[1:]:
            if arg.startswith('-'):
                other_args.append(arg)
            else:
                message_parts.append(arg)
        
        # Reconstruir línea de comandos con mensaje entre comillas
        if message_parts:
            message = ' '.join(message_parts)
            new_args = [sys.argv[0]] + other_args + [shlex.quote(message)]
            os.execv(sys.executable, [sys.executable] + new_args)
    
    # Ejecución normal
    asyncio.run(main())

if __name__ == "__main__":
    run_as_script()