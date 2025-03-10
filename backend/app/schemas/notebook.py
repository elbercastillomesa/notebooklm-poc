from datetime import datetime
from typing import List, Optional
from pydantic import BaseModel

class NoteBase(BaseModel):
    content: str

class NoteCreate(NoteBase):
    pass

class Note(NoteBase):
    id: int
    notebook_id: int
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        orm_mode = True

class NotebookBase(BaseModel):
    title: str

class NotebookCreate(NotebookBase):
    pass

class NotebookUpdate(NotebookBase):
    pass

class Notebook(NotebookBase):
    id: int
    created_at: datetime
    updated_at: Optional[datetime] = None
    notes: List[Note] = []

    class Config:
        orm_mode = True
