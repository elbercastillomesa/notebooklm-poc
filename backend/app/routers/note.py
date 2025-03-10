from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from ..crud import note as note_crud
from ..schemas.note import Note, NoteCreate, NoteUpdate
from ..database import get_db

router = APIRouter(
    prefix="/notes",
    tags=["notes"],
)

@router.get("/{note_id}", response_model=Note)
def read_note(note_id: int, db: Session = Depends(get_db)):
    db_note = note_crud.get_note(db, note_id=note_id)
    if db_note is None:
        raise HTTPException(status_code=404, detail="Note not found")
    return db_note

@router.put("/{note_id}", response_model=Note)
def update_note(note_id: int, note: NoteUpdate, db: Session = Depends(get_db)):
    db_note = note_crud.update_note(db, note_id=note_id, note=note)
    if db_note is None:
        raise HTTPException(status_code=404, detail="Note not found")
    return db_note

@router.delete("/{note_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_note(note_id: int, db: Session = Depends(get_db)):
    success = note_crud.delete_note(db, note_id=note_id)
    if not success:
        raise HTTPException(status_code=404, detail="Note not found")
    return None

# Additional routes for notebook-notes relationship

@router.get("/notebooks/{notebook_id}/notes", response_model=List[Note])
def read_notes_by_notebook(notebook_id: int, skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    notes = note_crud.get_notes_by_notebook(db, notebook_id=notebook_id, skip=skip, limit=limit)
    return notes

@router.post("/notebooks/{notebook_id}/notes", response_model=Note, status_code=status.HTTP_201_CREATED)
def create_note_for_notebook(notebook_id: int, note: NoteCreate, db: Session = Depends(get_db)):
    # Set the notebook_id in the note
    note.notebook_id = notebook_id
    return note_crud.create_note(db=db, note=note)