import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import LandingPage from './pages/LandingPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          {/* Redirecciones para mantener compatibilidad con enlaces existentes */}
          <Route path="sobre-mi" element={<LandingPage />} />
          <Route path="contacto" element={<LandingPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;