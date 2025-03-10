import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { notebooks } from '../../services/api';

export function Sidebar() {
  const [notebookList, setNotebookList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newNotebookTitle, setNewNotebookTitle] = useState('');
  const [showNewNotebookForm, setShowNewNotebookForm] = useState(false);
  
  const location = useLocation();

  useEffect(() => {
    async function fetchNotebooks() {
      try {
        setLoading(true);
        const response = await notebooks.getAll();
        setNotebookList(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching notebooks:", err);
        setError("Failed to load notebooks");
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
        setError("Failed to create notebook");
      }
    }
  };

  return (
    <aside className="w-64 border-r border-gray-200 dark:border-gray-700 h-full bg-gray-50 dark:bg-gray-900 flex flex-col">
      <div className="p-4">
        <button 
          onClick={() => setShowNewNotebookForm(true)}
          className="flex items-center justify-center w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          New Notebook
        </button>
      </div>
      
      {showNewNotebookForm && (
        <div className="px-4 mb-4">
          <div className="bg-white dark:bg-gray-800 p-3 rounded-md border border-gray-200 dark:border-gray-700">
            <input
              type="text"
              className="w-full p-2 mb-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              placeholder="Notebook Title"
              value={newNotebookTitle}
              onChange={(e) => setNewNotebookTitle(e.target.value)}
            />
            <div className="flex justify-end space-x-2">
              <button 
                onClick={() => setShowNewNotebookForm(false)}
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
              >
                Cancel
              </button>
              <button 
                onClick={handleCreateNotebook}
                className="text-sm text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
      
      <Link to="/" className="px-4 py-2 mx-4 mb-4 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-3">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
        Home
      </Link>
      
      <div className="px-4 text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
        Notebooks
      </div>
      
      <nav className="mt-2 flex-1 overflow-y-auto">
        {loading ? (
          <div className="flex justify-center py-4">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="px-4 py-2 text-sm text-red-500 dark:text-red-400">
            {error}
          </div>
        ) : notebookList.length === 0 ? (
          <div className="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
            No notebooks found
          </div>
        ) : (
          <ul className="space-y-1 px-2 py-2">
            {notebookList.map((notebook) => {
              const isActive = location.pathname === `/notebook/${notebook.id}`;
              return (
                <li key={notebook.id} className="px-2">
                  <Link 
                    to={`/notebook/${notebook.id}`}
                    className={`flex items-center py-2 px-3 rounded-md text-gray-700 dark:text-gray-300 ${
                      isActive 
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' 
                        : 'hover:bg-gray-200 dark:hover:bg-gray-800'
                    }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
                    </svg>
                    <span className="truncate">{notebook.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </nav>
    </aside>
  );
}