from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .database import engine, Base
from .routers import notebooks, notes

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Notebook API")

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "https://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(notebooks.router)
app.include_router(notes.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Notebook API"}

@app.get("/health")
def health_check():
    return {"status": "ok"}