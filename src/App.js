// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/services';
import RequestQuote from './components/RequestQuote';
import AboutUs from './components/About';

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Request Quote" element={<RequestQuote />} />
        <Route path="/About" element= {<AboutUs />}/>

      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
