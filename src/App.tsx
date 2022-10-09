import './App.css';
import Header from './components/Header';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import InformationPage from './pages/InformationPage';
import NotFoundPage from './pages/NotFoundPage';
import CommunityPage from './pages/CommunityPage';
import { ChakraProvider } from '@chakra-ui/react'
import Footer from './components/Footer';

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
      <Footer />
    </div>
  );
}

export default App;
