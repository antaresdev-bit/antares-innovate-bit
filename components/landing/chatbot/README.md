# Mr_antares.py
Chatbot
Documentación: Migración de Mr. Antares a la Web de Antares Innovate
Índice

Introducción
Arquitectura del Sistema
Requisitos Técnicos
Instalación y Configuración del Backend
Implementación del Frontend en React
Integración con la Web Existente
Ejemplos de Código
Pruebas y Despliegue
Mantenimiento y Mejoras Futuras
Solución de Problemas

Introducción
Este documento describe el proceso de migración del chatbot Mr. Antares desde su implementación en terminal (mr_antares_openai.py) a una versión web integrada con el sitio de Antares Innovate utilizando React para el frontend y FastAPI para el backend.
El chatbot Mr. Antares ofrece las siguientes funcionalidades:

Respuestas basadas en IA utilizando la API de OpenAI
Sistema de fallback con respuestas predefinidas cuando la API no está disponible
Análisis contextual de las conversaciones para ofrecer respuestas más precisas
Clasificación de intenciones del usuario
Almacenamiento y recuperación de sesiones de conversación

Requisitos Técnicos
Backend

Python 3.8 o superior
FastAPI 0.104.1 o superior
Uvicorn 0.23.2 o superior
OpenAI SDK (opcional, pero recomendado)
NLTK (opcional, mejora el análisis de texto)
Redis (opcional, para almacenamiento de sesiones)
Python-dotenv

Frontend

Node.js 16 o superior
React 17 o superior
React DOM
Axios o similar para peticiones HTTP
TailwindCSS (siguiendo la estructura existente)
Opcional: Socket.io-client (para efectos de "escritura en tiempo real")

Herramientas de Desarrollo

Git
npm o yarn
Postman (para probar endpoints)
Visual Studio Code (recomendado)

Instalación y Configuración del Backend
1. Preparación del Entorno
bashCopy# Crear entorno virtual
python -m venv venv

# Activar entorno virtual
# En Windows:
venv\Scripts\activate
# En Unix/MacOS:
source venv/bin/activate

# Instalar dependencias
pip install fastapi uvicorn openai nltk python-dotenv redis
2. Configuración de Variables de Entorno
Crear un archivo .env en la raíz del proyecto:
Copy# Clave API de OpenAI
OPENAI_API_KEY=sk-tu-clave-api-aqui

# Configuración del servidor
HOST=0.0.0.0
PORT=8000
ENV=development

# Base de datos (opcional)
REDIS_URL=redis://localhost:6379/0

4. Implementación del Backend

Copiar el código de mr_antares_web.py en los archivos correspondientes según la estructura de directorios.
Configurar las rutas en chat_routes.py:

pythonCopyfrom fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from typing import Optional
from src.api.controllers.chat_controller import ChatController

router = APIRouter()

class ChatRequest(BaseModel):
    message: str
    session_id: Optional[str] = None

@router.post("/")
async def process_message(request: ChatRequest, controller: ChatController = Depends()):
    """Procesa un mensaje del chatbot"""
    return await controller.process_message(request.message, request.session_id)

@router.post("/session")
async def create_session(controller: ChatController = Depends()):
    """Crea una nueva sesión de chat"""
    return await controller.create_session()

Implementar el controlador en chat_controller.py:

pythonCopyfrom src.core.response.mr_antares import MrAntaresWeb
from src.config.settings import OPENAI_API_KEY
import uuid

class ChatController:
    def __init__(self):
        # En implementaciones reales, usar un sistema de almacenamiento persistente
        self.active_sessions = {}

    async def process_message(self, message: str, session_id: str = None):
        """Procesa un mensaje y devuelve la respuesta"""
        # Crear ID de sesión si no existe
        session_id = session_id or f"session_{uuid.uuid4().hex}"
        
        # Obtener o crear instancia del chatbot
        if session_id in self.active_sessions:
            bot = self.active_sessions[session_id]
        else:
            bot = MrAntaresWeb(session_id=session_id, api_key=OPENAI_API_KEY)
            self.active_sessions[session_id] = bot
        
        # Procesar mensaje
        result = await bot.get_response(message)
        return result

    async def create_session(self):
        """Crea una nueva sesión de chat"""
        session_id = f"session_{uuid.uuid4().hex}"
        self.active_sessions[session_id] = MrAntaresWeb(session_id=session_id, api_key=OPENAI_API_KEY)
        return {"session_id": session_id}

Problemas con el formato de las respuestas:

Asegurarse de que el formato de las respuestas es consistente
Implementar parsing de respuestas robusto
Validar la estructura de datos antes de mostrarla


El chatbot no se integra correctamente con el sitio web:

Verificar conflictos de estilos CSS
Comprobar que el script se carga correctamente
Usar shadow DOM para aislar los estilos del chatbot



Preguntas Frecuentes
P: ¿Puedo usar el chatbot sin conexión a internet?
R: Sí, el sistema tiene un modo de respuestas predefinidas que funciona incluso sin conexión a internet. Sin embargo, las respuestas serán más limitadas y menos personalizadas.
P: ¿Qué hago si OpenAI bloquea mi clave API?
R: El sistema tiene un mecanismo de fallback. Configura use_fallback: true en la creación de la instancia de MrAntaresWeb para usar solo respuestas predefinidas.
P: ¿Cómo puedo personalizar las respuestas predefinidas?
R: Las respuestas están definidas en el objeto FALLBACK_RESPONSES en el archivo mr_antares_web.py. Puedes modificar o añadir respuestas según necesites.
