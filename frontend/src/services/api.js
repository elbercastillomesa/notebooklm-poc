import axios from 'axios';

// Create axios instance with base URL
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Notebooks API
export const notebooks = {
  getAll: () => api.get('/notebooks'),
  getById: (id) => api.get(`/notebooks/${id}`),
  create: (data) => api.post('/notebooks', data),
  update: (id, data) => api.put(`/notebooks/${id}`, data),
  delete: (id) => api.delete(`/notebooks/${id}`),
};

// Notes API
export const notes = {
  getByNotebookId: (notebookId) => api.get(`/notebooks/${notebookId}/notes`),
  create: (notebookId, data) => api.post(`/notebooks/${notebookId}/notes`, data),
  update: (id, data) => api.put(`/notes/${id}`, data),
  delete: (id) => api.delete(`/notes/${id}`),
};

export default api;