# notebooklm-poc

An imitation of the NotebookLM tool.

## Project Structure

```
/notebooklm-poc
│── /backend                # FastAPI Backend
│   ├── /app
│   │   ├── /api            # API Routes
│   │   │   ├── gemini.py
│   │   │   ├── users.py
│   │   │   ├── __init__.py
│   │   ├── /models         # Data Models
│   │   ├── /services       # Logic
│   │   ├── main.py         # FastAPI entry point
│   │   ├── config.py       # API Conf
│   │   ├── dependencies.py # Dependencies
│   ├── requirements.txt    # FastAPI Libraries
│   ├── Dockerfile          # Docker (backend)
│   ├── .env                
│── /frontend               # React Frontend
│   ├── /src
│   │   ├── /components     # Components
│   │   ├── /pages          # Pages
│   │   ├── /api            # FastAPI calls
│   │   ├── App.jsx         # Main Component
│   ├── package.json        # React Dependencies
│   ├── vite.config.js      # Vite Conf
│   ├── index.html          # Main page
│── .gitpod.yml             # Gitpod Conf
│── .gitignore              
│── README.md               
```