import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import CharactersPage from './pages/CharactersPage';
import NotFoundPage from './pages/NotFoundPage';
import CreatorsPage from './pages/CreatorsPage';
import EventsPage from './pages/EventsPage';
import Series from './pages/SeriesPage';
import Stories from './pages/StoriesPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/api-marvel' element={<HomePage />} />
        <Route path='/api-marvel/Characters' element={<CharactersPage />} />
        <Route path='/api-marvel/Creators' element={<CreatorsPage />} />
        <Route path='/api-marvel/Events' element={<EventsPage />} />
        <Route path='/api-marvel/Series' element={<Series />} />
        <Route path='/api-marvel/Stories' element={<Stories />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
