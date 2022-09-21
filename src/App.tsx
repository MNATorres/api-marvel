import './App.css';
import Header from './components/Header';
import { Routes, Route, Link } from "react-router-dom";
import HomePage from './pages/HomePage';
import InformationPage from './pages/InformationPage';
import NotFoundPage from './pages/NotFoundPage';
import CommunityPage from './pages/CommunityPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Informacion' element={<InformationPage />} />
        <Route path='/Comunidad' element={<CommunityPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
