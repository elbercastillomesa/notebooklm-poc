import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { notebooks } from '../services/api';

export function Home() {
  const [notebookList, setNotebookList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newNotebookTitle, setNewNotebookTitle] = useState('');
  const [showNewNotebookForm, setShowNewNotebookForm] = useState(false);

  useEffect(() => {
    async function fetchNotebooks() {
      try {
        setLoading(true);
        const response = await notebooks.getAll();
        setNotebookList(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching notebooks:", err);
        setError("Failed to load notebooks. Please try again.");
        setLoading(false);
      }
    }
    
    fetchNotebooks();
  }, []);

  const handleCreateNotebook = async () => {
    if (newNotebookTitle.trim()) {
      try {
        const response = await notebooks.create({ title: newNotebookTitle });
        setNotebookList([...notebookList, response.data]);
        setNewNotebookTitle('');
        setShowNewNotebookForm(false);
      } catch (err) {
        console.error("Error creating notebook:", err);
        setError("Failed to create notebook. Please try again.");
      }
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

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome to NotebookApp</h1>
      <p className="text-lg">
        This is a NotebookLM-inspired application built with React and FastAPI.
      </p>
      
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Your Notebooks</h2>
        <button 
          onClick={() => setShowNewNotebookForm(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          New Notebook
        </button>
      </div>
      
      {showNewNotebookForm && (
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-gray-50 dark:bg-gray-800">
          <h3 className="text-lg font-medium mb-2">Create New Notebook</h3>
          <input
            type="text"
            className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 mb-3"
            placeholder="Notebook Title"
            value={newNotebookTitle}
            onChange={(e) => setNewNotebookTitle(e.target.value)}
          />
          <div className="flex justify-end space-x-2">
            <button 
              onClick={() => setShowNewNotebookForm(false)}
              className="border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Cancel
            </button>
            <button 
              onClick={handleCreateNotebook}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
            >
              Create
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {notebookList.length === 0 ? (
          <div className="col-span-2 text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="text-gray-500 dark:text-gray-400">No notebooks yet. Create your first notebook to get started.</p>
          </div>
        ) : (
          notebookList.map((notebook) => (
            <div key={notebook.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold mb-2">{notebook.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Last edited on {new Date(notebook.updated_at || notebook.created_at).toLocaleDateString()}
              </p>
              <div className="flex justify-between">
                <p className="text-gray-500 dark:text-gray-400">
                  {notebook.notes.length} {notebook.notes.length === 1 ? 'note' : 'notes'}
                </p>
                <Link 
                  to={`/notebook/${notebook.id}`}
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  Open →
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}