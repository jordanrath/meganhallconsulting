import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Schedule from './pages/Schedule';
import Contact from './pages/Contact';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Policies from './pages/Policies';
import './components/FontAwesomeIcons';

function Main() {
  return (
    <> 
      <div className="main">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/schedule' element={<Schedule />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/policies' element={<Policies />} />
        </Routes>
        <Footer />
      </div>
      {/* <Navbar /> */}
    </>
  );
}

export default Main;
