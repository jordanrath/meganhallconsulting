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
            <li >
              <Link className='site-title-container' to='/meganhallconsulting'>
                <h1 className='site-title'>Megan Hall Consulting</h1>
                <p className='site-title-quote'>The applied science of limitless health and performance</p>
              </Link>
            </li>
            <li>
              <NavLink to='/meganhallconsulting/about'>ABOUT</NavLink>
            </li>
            <li>
              <NavLink to='/meganhallconsulting/schedule'>WORK WITH ME</NavLink>
            </li>
            <li>
              <NavLink to='/meganhallconsulting/blog'>BLOG</NavLink>
            </li>
            <li>
              <NavLink to='/meganhallconsulting/contact'>CONTACT</NavLink>
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
