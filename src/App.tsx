import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import CharactersPage from './pages/CharactersPage';
import NotFoundPage from './pages/NotFoundPage';
import EventsPage from './pages/EventsPage';
import Series from './pages/SeriesPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/api-marvel' element={<EventsPage />} />
        <Route path='/api-marvel/Characters' element={<CharactersPage />} />
        <Route path='/api-marvel/Events' element={<HomePage />} />
        <Route path='/api-marvel/Series' element={<Series />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
