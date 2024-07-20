import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

// Import your pages
import Home from './pages/Home';
import Qiz from './pages/Qiz';
import StudyPlan from './pages/StudyPlan';
import Flashcards from './pages/Flashcards';

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/qiz" element={<Qiz />} />
            <Route path="/studyPlan" element={<StudyPlan />} />
            <Route path="/flashcards" element={<Flashcards />} />
            <Route path="*" element={<Home />} /> 
          </Routes>
        </main>

      </div>
    </Router>
  );
}

export default App;
