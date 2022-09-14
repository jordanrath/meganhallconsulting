import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Schedule from './pages/Schedule';
import Contact from './pages/Contact';
import Products from './pages/Products';
import BlogAndPodcast from './pages/BlogAndPodcast';
import Testimonials from './components/section/Testimonials';
import Footer from './components/Footer';
import Policies from './pages/Policies';
import './components/controls/FontAwesomeIcons';
import ScrollToTop from './components/ScrollToTop';

function Main() {
  return (
    <> 
      <div className="main">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/schedule' element={<Schedule />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/products' element={<Products />} />
          <Route path='/blog&amp;podcast' element={<BlogAndPodcast />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/policies' element={<Policies />} />
        </Routes>
        <div className='footer-section'>
          <Footer />
        </div>
      </div>
      {/* <Navbar /> */}
    </>
  );
}

export default Main;
