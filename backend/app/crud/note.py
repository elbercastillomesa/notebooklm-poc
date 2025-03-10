from sqlalchemy.orm import Session
from ..models.note import Note
from ..schemas.note import NoteCreate, NoteUpdate

def get_notes_by_notebook(db: Session, notebook_id: int, skip: int = 0, limit: int = 100):
    return db.query(Note).filter(Note.notebook_id == notebook_id).offset(skip).limit(limit).all()

def get_note(db: Session, note_id: int):
    return db.query(Note).filter(Note.id == note_id).first()

def create_note(db: Session, note: NoteCreate):
    db_note = Note(**note.dict())
    db.add(db_note)
    db.commit()
    db.refresh(db_note)
    return db_note

def update_note(db: Session, note_id: int, note: NoteUpdate):
    db_note = get_note(db, note_id)
    if db_note:
        update_data = note.dict(exclude_unset=True)
        for key, value in update_data.items():
            setattr(db_note, key, value)
        db.commit()
        db.refresh(db_note)
    return db_note

def delete_note(db: Session, note_id: int):
    db_note = get_note(db, note_id)
    if db_note:
        db.delete(db_note)
        db.commit()
        return True
    return False