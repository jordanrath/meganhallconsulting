import React from 'react'
import { NavLink, Link } from 'react-router-dom';


const Navbar = () => {
  return (
     <div className='nav-image'>
      <div className='nav-banner-container'>
        <img src='/images/nav-banner.jpg' alt='Colorado mountains' className='nav-banner'/>
      </div>
      <nav className='nav'>
          <div className='site-title-container'>
            <Link to='/' className='site-title'>Megan Hall Consulting</Link>
            <Link to='/' className='site-title-quote'>-The applied science of healthy living</Link>
          </div>
            <ul>
              <li>
                <NavLink to='/about'>ABOUT</NavLink>
              </li>
              <li>
                <NavLink to='/schedule'>WORK WITH ME</NavLink>
              </li>
              <li>
                <NavLink to='/contact'>CONTACT</NavLink>
              </li>
            </ul>
      </nav>
    </div>
  )
}

export default Navbar