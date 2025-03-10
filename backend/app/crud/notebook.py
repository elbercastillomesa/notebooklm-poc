from sqlalchemy.orm import Session
from ..models.notebook import Notebook
from ..schemas.notebook import NotebookCreate, NotebookUpdate

def get_notebooks(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Notebook).offset(skip).limit(limit).all()

def get_notebook(db: Session, notebook_id: int):
    return db.query(Notebook).filter(Notebook.id == notebook_id).first()

def create_notebook(db: Session, notebook: NotebookCreate):
    db_notebook = Notebook(title=notebook.title)
    db.add(db_notebook)
    db.commit()
    db.refresh(db_notebook)
    return db_notebook

def update_notebook(db: Session, notebook_id: int, notebook: NotebookUpdate):
    db_notebook = get_notebook(db, notebook_id)
    if db_notebook:
        update_data = notebook.dict(exclude_unset=True)
        for key, value in update_data.items():
            setattr(db_notebook, key, value)
        db.commit()
        db.refresh(db_notebook)
    return db_notebook

def delete_notebook(db: Session, notebook_id: int):
    db_notebook = get_notebook(db, notebook_id)
    if db_notebook:
        db.delete(db_notebook)
        db.commit()
        return True
    return False
