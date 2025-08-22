import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import Staff from './pages/Staff';
import Services from './pages/Services';
import Eyeglasses from './pages/Eyeglasses';
import ContactLenses from './pages/ContactLenses';
import Insurance from './pages/Insurance';
import Appointment from './pages/Appointment';
import PatientForms from './pages/PatientForms';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/services" element={<Services />} />
            <Route path="/eyeglasses" element={<Eyeglasses />} />
            <Route path="/contact-lenses" element={<ContactLenses />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/patient-forms" element={<PatientForms />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
