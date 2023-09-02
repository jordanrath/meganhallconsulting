import React, { useState } from 'react'
import Menu from './Menu';
import { NavLink } from 'react-router-dom';

const MenuOpen = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { showMenu } = props;

  return (
    <div className='menu'>
        <Menu onClick={() => setMenuOpen(!menuOpen)} menuOpen={menuOpen} showMenu={showMenu} />
        <div
            className='menu__overlay'
            style={{
                top: menuOpen ? "0px" : "-105vh",
                transitionDelay: menuOpen ? '0s' : '0s'
              }
            }
        >
            <button className='menu__buttons' onClick={() => setMenuOpen(!menuOpen)}>
                <ul>
                    <li
                      style={{
                        position: 'relative',
                        left: menuOpen ? '-120px' : '0px',
                        transform: 'translateX(120px)',
                        transition: 'left 2s ease-in-out'
                      }}
                    >
                      <NavLink to='/meganhallconsulting'>Home</NavLink>
                    </li>
                    <li
                      style={{
                        position: 'relative',
                        left: menuOpen ? '-120px' : '0px',
                        transform: 'translateX(120px)',
                        transition: 'left 1.8s ease-in-out'
                      }}
                    >
                      <NavLink to='/meganhallconsulting/about'>About</NavLink>
                    </li>
                    <li
                      style={{
                        position: 'relative',
                        left: menuOpen ? '-120px' : '0px',
                        transform: 'translateX(120px)',
                        transition: 'left 1.6s ease-in-out'
                      }}
                    >
                      <NavLink to='/meganhallconsulting/schedule'>Work With Me</NavLink>
                    </li>
                    <li
                      style={{
                        position: 'relative',
                        left: menuOpen ? '-120px' : '0px',
                        transform: 'translateX(120px)',
                        transition: 'left 1.4s ease-in-out'
                      }}
                    >
                      <NavLink to='/meganhallconsulting/blog'>Blog</NavLink>
                    </li>
                    <li
                      style={{
                        position: 'relative',
                        left: menuOpen ? '-120px' : '0px',
                        transform: 'translateX(120px)',
                        transition: 'left 1.2s ease-in-out'
                      }}
                    >
                      <NavLink to='/meganhallconsulting/products'>Products</NavLink>
                    </li>
                    <li
                      style={{
                        position: 'relative',
                        left: menuOpen ? '-120px' : '0px',
                        transform: 'translateX(120px)',
                        transition: 'left 1s ease-in-out'
                      }}
                    >
                      <NavLink to='/meganhallconsulting/contact'>Contact</NavLink>
                    </li>
                </ul>
            </button>
        </div>
    </div>
  )
}

export default MenuOpen;
