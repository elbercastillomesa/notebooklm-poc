from datetime import datetime
from typing import Optional
from pydantic import BaseModel

class NoteBase(BaseModel):
    content: str

class NoteCreate(NoteBase):
    notebook_id: int

class NoteUpdate(NoteBase):
    pass

class Note(NoteBase):
    id: int
    notebook_id: int
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        orm_mode = True