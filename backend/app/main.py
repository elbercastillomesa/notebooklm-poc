from fastapi import FastAPI
from app.api import gemini

app = FastAPI()

app.include_router(gemini.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to NotebookLM Clone API"}
