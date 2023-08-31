import { React, useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import ThemeButton from './ThemeButton';
import MenuOpen from './MenuOpen';

const Navbar = () => {
  const [isDesktop, setisDesktop] = useState(window.innerWidth > 1450);

  const updateMediaQuery = () => {
    setisDesktop(window.innerWidth > 1450);
  }

  useEffect(() => {
    window.addEventListener('resize', updateMediaQuery);
    return () => window.removeEventListener('resize', updateMediaQuery);
  });

  useEffect(() => {
  //when user scrolls, execute stickyNav
  window.onscroll = function() {stickyNav()};

  //grab the navbar
  let navbar = document.getElementById('nav');

  //offset the position
  let sticky = navbar.offsetTop;

  //add the sticky class to the nav element when a scroll position is reached
  const stickyNav = () => {
    if (window.scrollY > sticky) {
      navbar.classList.add('sticky')
    } else {
      navbar.classList.remove('sticky')
    }
  }
})

  return (
    <>
      {isDesktop ? (
        <nav className='nav' id='nav' data-aos="fade-down">
          <ul>
            <li className='site-title-container'>
              <Link to='/' className='site-title'>Megan Hall Consulting</Link>
              <Link to='/' className='site-title-quote'>The applied science of limitless health and performance</Link>
            </li>
            <li>
              <NavLink to='/about'>ABOUT</NavLink>
            </li>
            <li>
              <NavLink to='/schedule'>WORK WITH ME</NavLink>
            </li>
            {/* <li>
              <NavLink to='/podcast'>PODCAST</NavLink>
            </li> */}
            <li>
              <NavLink to='/blog'>BLOG</NavLink>
            </li>
            <li>
              <NavLink to='/products'>PRODUCTS</NavLink>
            </li>
            <li>
              <NavLink to='/contact'>CONTACT</NavLink>
            </li>
            <li>
              <ThemeButton />
            </li>
            </ul>
          </nav>
      ) : (
        <div className='nav-menu' id='nav' data-aos="fade-down">
          <MenuOpen showMenu={true} />
          <ThemeButton />
        </div>
      )}
    </>
  )
}

export default Navbar;
