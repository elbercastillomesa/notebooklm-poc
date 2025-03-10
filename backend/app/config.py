from pydantic_settings import BaseSettings
from dotenv import load_dotenv
import os

class Settings(BaseSettings):
    DATABASE_URL: str = "sqlite:///./notebook_app.db"
    SECRET_KEY: str = os.getenv("SQLITE_SECRET_KEY")
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    
    class Config:
        env_file = ".env"

settings = Settings()