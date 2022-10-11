import './App.css';
import Header from './components/Header';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import InformationPage from './pages/InformationPage';
import NotFoundPage from './pages/NotFoundPage';
import CommunityPage from './pages/CommunityPage';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/api-marvel' element={<HomePage />} />
        <Route path='/api-marvel/Informacion' element={<InformationPage />} />
        <Route path='/api-marvel/Comunidad' element={<CommunityPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Navigation />
      <Footer />
    </div>
  );
}

export default App;
