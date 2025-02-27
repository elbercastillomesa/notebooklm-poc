from fastapi import APIRouter
import google.generativeai as genai
from dotenv import load_dotenv
import os

load_dotenv()  # Carga variables de entorno

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

router = APIRouter()

@router.post("/generate")
def generate_response(prompt: str):
    model = genai.GenerativeModel("gemini-pro")
    response = model.generate_content(prompt)
    return {"response": response.text}
