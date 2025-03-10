from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from ..crud import notebook as notebook_crud
from ..schemas.notebook import Notebook, NotebookCreate, NotebookUpdate
from ..database import get_db

router = APIRouter(
    prefix="/notebooks",
    tags=["notebooks"],
)

@router.get("/", response_model=List[Notebook])
def read_notebooks(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    notebooks = notebook_crud.get_notebooks(db, skip=skip, limit=limit)
    return notebooks

@router.post("/", response_model=Notebook, status_code=status.HTTP_201_CREATED)
def create_notebook(notebook: NotebookCreate, db: Session = Depends(get_db)):
    return notebook_crud.create_notebook(db=db, notebook=notebook)

@router.get("/{notebook_id}", response_model=Notebook)
def read_notebook(notebook_id: int, db: Session = Depends(get_db)):
    db_notebook = notebook_crud.get_notebook(db, notebook_id=notebook_id)
    if db_notebook is None:
        raise HTTPException(status_code=404, detail="Notebook not found")
    return db_notebook

@router.put("/{notebook_id}", response_model=Notebook)
def update_notebook(notebook_id: int, notebook: NotebookUpdate, db: Session = Depends(get_db)):
    db_notebook = notebook_crud.update_notebook(db, notebook_id=notebook_id, notebook=notebook)
    if db_notebook is None:
        raise HTTPException(status_code=404, detail="Notebook not found")
    return db_notebook

@router.delete("/{notebook_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_notebook(notebook_id: int, db: Session = Depends(get_db)):
    success = notebook_crud.delete_notebook(db, notebook_id=notebook_id)
    if not success:
        raise HTTPException(status_code=404, detail="Notebook not found")
    return None