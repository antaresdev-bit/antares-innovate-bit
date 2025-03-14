import os
import sys
import uuid
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Dict

# Obtener la ruta de la carpeta donde está este script
landing_dir = os.path.dirname(os.path.abspath(__file__))

# Cambiar el directorio de trabajo a "landing"
os.chdir(landing_dir)
sys.path.insert(0, landing_dir)

print(f"Servidor iniciado en {os.getcwd()}")

# Importar la clase MrAntaresWeb desde el módulo correcto
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
    session_id = f"session_{uuid.uuid4().hex}"
    bot = MrAntaresWeb(session_id=session_id)
    active_sessions[session_id] = bot
    return {"session_id": session_id}

# Endpoint para procesar mensajes
@app.post("/api/mr-antares/message")
async def process_message(request: MessageRequest):
    if request.session_id not in active_sessions:
        raise HTTPException(status_code=404, detail="Sesión no encontrada")

    bot = active_sessions[request.session_id]
    
    try:
        result = await bot.get_response(request.message)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error al procesar mensaje: {str(e)}")

# Endpoint para verificar el estado del servidor
@app.get("/health")
async def health_check():
    return {"status": "ok"}

# Ejecutar el servidor si se llama directamente
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=9000)
