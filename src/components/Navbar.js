import React from 'react'
import { NavLink, Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <section className='nav-section'>
     <div className='nav-image'>
      <div className='nav-banner-container'>
        <img src='/images/IMG_7227.jpg' alt='Colorado mountains' className='nav-banner'/>
      </div>
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
    </div>
    </section>
  )
}

export default Navbar