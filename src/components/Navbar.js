import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import SvgBanner from './SvgBanner';


const Navbar = () => {
  return (
    <>
      <SvgBanner />
      <nav className='nav'>
            <ul>
              <li className='site-title-container'>
                <Link to='/' className='site-title'>Megan Hall Consulting</Link>
                <Link to='/' className='site-title-quote'>The applied science of healthy living</Link>
              </li>
              <li>
                <NavLink to='/about'>ABOUT</NavLink>
              </li>
              <li>
                <NavLink to='/schedule'>WORK WITH ME</NavLink>
              </li>
              <li>
                <NavLink to='/contact'>CONTACT</NavLink>
              </li>
              <li>
                <NavLink to='/testimonials'>TESTIMONIALS</NavLink>
              </li>
            </ul>
      </nav>
    </>
  )
}

export default Navbar