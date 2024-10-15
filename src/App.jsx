import React from 'react';
import Navbar from '../src/components/Navbar';
import Homepage from './components/Homepage';
import AdvancedFooter from './pages/AdvancedFooter';
import ContactPage from './pages/ContactPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutEessan1 from './pages/AboutEessan1';
import 'bootstrap/dist/css/bootstrap.min.css';
import VisionAndMission from './pages/VisionAndMission';
import WhyEssan1 from './pages/WhyEssan1';
import Contact from './pages/Contact';
import Product from './pages/Product';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Homepage />
                <WhyEssan1 />
                <VisionAndMission />
                <Product />
                <Contact />
              </>
            } 
          />
          <Route path="/about" element={<AboutEessan1 />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <AdvancedFooter />
      </Router>
    </>
  );
}

export default App;
