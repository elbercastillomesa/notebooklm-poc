// pages/Notebook.jsx (updated with API integration)
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { notebooks, notes } from '../services/api';

export function Notebook() {
  const { id } = useParams();
  const [notebook, setNotebook] = useState(null);
  const [notebookNotes, setNotebookNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        // Fetch notebook details
        const notebookResponse = await notebooks.getById(id);
        setNotebook(notebookResponse.data);
        
        // Fetch notebook notes
        const notesResponse = await notes.getByNotebookId(id);
        setNotebookNotes(notesResponse.data);
        
        setLoading(false);
      } catch (err) {
        console.error("Error fetching notebook data:", err);
        setError("Failed to load notebook. Please try again.");
        setLoading(false);
      }
    }
    
    if (id) {
      fetchData();
    }
  }, [id]);

  const handleAddNote = async () => {
    if (newNote.trim()) {
      try {
        const response = await notes.create(id, { content: newNote });
        setNotebookNotes([...notebookNotes, response.data]);
        setNewNote("");
      } catch (err) {
        console.error("Error adding note:", err);
        setError("Failed to add note. Please try again.");
      }
    }
  };

  const handleDeleteNote = async (noteId) => {
    try {
      await notes.delete(noteId);
      setNotebookNotes(notebookNotes.filter(note => note.id !== noteId));
    } catch (err) {
      console.error("Error deleting note:", err);
      setError("Failed to delete note. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-md">
        {error}
      </div>
    );
  }

  if (!notebook) {
    return (
      <div className="p-4 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-md">
        Notebook not found.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">{notebook.title}</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
          Save
        </button>
      </div>

      <div className="space-y-4">
        {notebookNotes.length === 0 ? (
          <div className="text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="text-gray-500 dark:text-gray-400">No notes yet. Add your first note below.</p>
          </div>
        ) : (
          notebookNotes.map((note) => (
            <div key={note.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 relative group">
              <p className="mb-2">{note.content}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(note.created_at).toLocaleString()}
              </p>
              <button 
                onClick={() => handleDeleteNote(note.id)}
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
              </button>
            </div>
          ))
        )}
      </div>

      <div className="mt-8 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
        <textarea
          className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          rows="4"
          placeholder="Add a new note..."
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        ></textarea>
        <div className="flex justify-end mt-2">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
            onClick={handleAddNote}
          >
            Add Note
          </button>
        </div>
      </div>
    </div>
  );
}