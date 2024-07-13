import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import Qiz from './pages/Qiz';
import StudyPlan from './pages/StudyPlan';
// import Navbar from './pages/Navbar';

import './App.css';

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        {/* <nav>
          <Link to="/">Home</Link>
          <Link to="/qiz">Qiz</Link>
          <Link to="/studyPlan">Study Plan</Link>
        </nav> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/qiz" element={<Qiz />} />
          <Route path="/studyPlan" element={<StudyPlan />} />
        </Routes>
        {/* <footer>
          <div>&copy; {currentYear} by <span>CSS Qiz</span> | All Rights Reserved</div>
        </footer> */}
      </div>
    </Router>
  );
}

export default App;
