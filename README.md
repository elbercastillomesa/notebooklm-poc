# notebooklm-poc

An imitation of the NotebookLM tool.

## Try it out:

1. Click on the following link
  https://gitpod.io/#https://github.com/elbercastillomesa/notebooklm-poc/
1. Your environment is being prepared, wait about 40 seconds (A splash screen will appear)
1. VScode IDE will be displayed
1. :tada:

## Project Structure (WIP)

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