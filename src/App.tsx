import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import InformationPage from './pages/InformationPage';
import NotFoundPage from './pages/NotFoundPage';
import CommunityPage from './pages/CommunityPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/api-marvel' element={<HomePage />} />
        <Route path='/api-marvel/Informacion' element={<InformationPage />} />
        <Route path='/api-marvel/Comunidad' element={<CommunityPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
