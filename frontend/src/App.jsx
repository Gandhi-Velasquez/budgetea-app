import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BudgetApp from './views/BudgetApp';
import Home from './views/Home';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Routes>
            <Route path="/app" element={<BudgetApp />} />
            <Route path="/" element={<Home />} />
          </Routes>
      </div>
    </Router>
  );
};

export default App;
