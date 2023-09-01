import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AOS from "aos";
 import "aos/dist/aos.css";
 import './components/controls/FontAwesomeIcons';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Schedule from './pages/Schedule';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Podcast from './pages/Podcast';
import Blog from './pages/Blog';
import Testimonials from './components/section/Testimonials';
import Footer from './components/Footer';
import Policies from './pages/Policies';

function Main() {

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
      offset: 200,
      easing: 'ease-in-out-sine',
    });
    AOS.refresh()
  }, []);

  return (
    <> 
      <div className="main">
        <Navbar />
        <Routes>
          <Route path='/meganhallconsulting' element={<Home />} />
          <Route path='/meganhallconsulting/about' element={<About />} />
          <Route path='/meganhallconsulting/schedule' element={<Schedule />} />
          <Route path='/meganhallconsulting/contact' element={<Contact />} />
          <Route path='/meganhallconsulting/products' element={<Products />} />
          <Route path='/meganhallconsulting/podcast' element={<Podcast />} />
          <Route path='/meganhallconsulting/blog' element={<Blog />} />
          <Route path='/meganhallconsulting/testimonials' element={<Testimonials />} />
          <Route path='/meganhallconsulting/policies' element={<Policies />} />
        </Routes>
        <div className='footer-section'>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Main;
