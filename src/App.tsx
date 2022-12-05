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
        <Route path='/apiMarvel' element={<EventsPage />} />
        <Route path='/apiMarvel/Characters' element={<CharactersPage />} />
        <Route path='/apiMarvel/Comics' element={<HomePage />} />
        <Route path='/apiMarvel/Series' element={<Series />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
