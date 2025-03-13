from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional, Dict, Any
import uuid

# Importar la clase MrAntaresWeb desde tu archivo
from chatbot.mr_antares_openai1 import MrAntaresWeb

# Inicializar FastAPI
app = FastAPI(title="Mr. Antares API")

# Configurar CORS para permitir peticiones desde el frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # En producción, limitar a dominio específico
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Modelo para solicitud de mensaje
class MessageRequest(BaseModel):
    message: str
    session_id: str

# Almacén de sesiones activas (en producción usar Redis, base de datos, etc.)
active_sessions: Dict[str, MrAntaresWeb] = {}

# Endpoint para crear nueva sesión
@app.post("/api/mr-antares/session")
async def create_session():
    # Generar un ID de sesión único
    session_id = f"session_{uuid.uuid4().hex}"
    
    # Crear una nueva instancia de MrAntaresWeb
    # Nota: Aquí puedes proporcionar tu API key de OpenAI si la tienes
    # bot = MrAntaresWeb(session_id=session_id, api_key="tu-api-key")
    bot = MrAntaresWeb(session_id=session_id)
    
    # Guardar la sesión
    active_sessions[session_id] = bot
    
    return {"session_id": session_id}

# Endpoint para procesar mensajes
@app.post("/api/mr-antares/message")
async def process_message(request: MessageRequest):
    # Verificar si la sesión existe
    if request.session_id not in active_sessions:
        raise HTTPException(status_code=404, detail="Sesión no encontrada")
    
    # Obtener el bot de la sesión
    bot = active_sessions[request.session_id]
    
    try:
        # Procesar el mensaje
        result = await bot.get_response(request.message)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error al procesar mensaje: {str(e)}")

# Endpoint opcional para verificar el estado del servidor
@app.get("/health")
async def health_check():
    return {"status": "ok"}

# Ejecutar el servidor si se llama directamente
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)