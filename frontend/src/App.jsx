import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Notebook } from './pages/Notebook';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notebook/:id" element={<Notebook />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;