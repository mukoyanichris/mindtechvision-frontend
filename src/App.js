// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import Hero from './components/Hero';
import Services from './components/services';
import RequestQuote from './components/RequestQuote';
import AboutUs from './components/About';
import Contact from "./components/Contact"; 
import AdminLayout from "./components/admin/AdminLayout";
import Dashboard from "./components/admin/Dashboard";
import ServicesAdmin from "./components/admin/ServicesAdmin";
import RequestsAdmin from "./components/admin/RequestsAdmin";
import ContactsAdmin from "./components/admin/ContactAdmin";
import AboutAdmin from "./components/admin/aboutAdmin";
import ToolsAdmin from "./components/admin/ToolsAdmin";


function App() {
  return (
    <Router>
      <div className="app-shell">
      <Navbar />
      
      <main className="page-content">
        <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/services" element={<Services />} />
        <Route path="/RequestQuote" element={<RequestQuote />} />
        <Route path="/About" element= {<AboutUs />}/>
         <Route path="/contact" element={<Contact />} />   {/* new */}
         <Route path="/admin" element={<AdminLayout />}>
    <Route index element={<Dashboard />} />
    <Route path="services" element={<ServicesAdmin />} />
    <Route path="requests" element={<RequestsAdmin />} />
    <Route path="contacts" element={<ContactsAdmin />} />
    <Route path="about" element={<AboutAdmin />} />
    <Route path="tools" element={<ToolsAdmin />} />
  </Route>
         

      </Routes>
      </main>
      
      <Footer />
      </div>
    </Router>
  );
}

export default App;