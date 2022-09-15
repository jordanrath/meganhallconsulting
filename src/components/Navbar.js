import { React, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom';

const Navbar = () => {

  // const resetScrollOnClick = useCallback((event) => {
  //   event.preventDefault()
  //   const target = event.target.getAttribute('href')
  //   const location = document.querySelector(target).offsetTop

  //   window.scrollTo({
  //     left: 0,
  //     top: location - 64
  //   })
  // }, [])

  // const onClick = useCallback((event) => {
  //   event.preventDefault();
  //   resetScrollOnClick(event)
  // }, [resetScrollOnClick]);

  useEffect(() => {
  //when user scrolls, execute stickyNav
  window.onscroll = function() {stickyNav()};

  //grab the navbar
  let navbar = document.getElementById('nav');

  //offset the position
  let sticky = navbar.offsetTop;

  //add the sticky class to the nav element when a scroll position is reached
  const stickyNav = () => {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add('sticky')
    } else {
      navbar.classList.remove('sticky')
    }
  }
})

  return (
    <>
      {/* <SvgBanner /> */}
      <nav className='nav' id='nav' data-aos="fade-down">
            <ul>
              <li className='site-title-container'>
                <Link to='/' className='site-title'>Apeiron Health</Link>
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
                <NavLink to='/products'>PRODUCTS</NavLink>
              </li>
              <li>
                <NavLink to='/blog&amp;podcast'>BLOG &amp; PODCAST</NavLink>
              </li>
            </ul>
      </nav>
    </>
  )
}

export default Navbar