import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Import your pages
import Home from './pages/Home';
import Qiz from './pages/Qiz';
import StudyPlan from './pages/StudyPlan';

function App() {
  const [count, setCount] = useState(0);
  const currentYear = new Date().getFullYear();

  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/qiz" element={<Qiz />} />
            <Route path="/studyPlan" element={<StudyPlan />} />
          </Routes>
        </main>

      </div>
    </Router>
  );
}

export default App;
