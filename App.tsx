import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Installed from './components/Installed';
import Commissions from './components/Commissions';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<><Navigation /><Portfolio /></>} />
          <Route path="/installed" element={<><Navigation /><Installed /></>} />
          <Route path="/commissions" element={<><Navigation /><Commissions /></>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;