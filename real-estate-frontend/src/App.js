import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'; // Import the Tailwind CSS

// Import Pages
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


