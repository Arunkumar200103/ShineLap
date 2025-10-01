import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sales from './pages/Sales';
import Services from './pages/Services';
import Accessories from './pages/Accessories';
import Warranty from './pages/Warranty';
import Contact from './pages/Contact';
import About from './pages/About';
import Admin from './pages/Admin';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`${darkMode ? 'dark' : ''}`}>
        <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home darkMode={darkMode} />} />
              <Route path="/sales" element={<Sales darkMode={darkMode} />} />
              <Route path="/services" element={<Services darkMode={darkMode} />} />
              <Route path="/accessories" element={<Accessories darkMode={darkMode} />} />
              <Route path="/warranty" element={<Warranty darkMode={darkMode} />} />
              <Route path="/contact" element={<Contact darkMode={darkMode} />} />
              <Route path="/about" element={<About darkMode={darkMode} />} />
              <Route path="/admin" element={<Admin darkMode={darkMode} />} />
            </Routes>
          </AnimatePresence>
          
          <Footer darkMode={darkMode} />
        </div>
      </div>
    </Router>
  );
}

export default App;