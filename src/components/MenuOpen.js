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
                top: menuOpen ? '0px' : '0px',
                left: menuOpen ? '0px' : '-1450px',
                transitionDelay: menuOpen ? '0s' : '0s'
            }}
        >
            <button className='menu__buttons' onClick={() => setMenuOpen(!menuOpen)}>
                <ul >
                    <li>
                      <NavLink to='/meganhallconsulting'>Home</NavLink>
                    </li>
                    <li>
                      <NavLink to='/meganhallconsulting/about'>About</NavLink>
                    </li>
                    <li>
                      <NavLink to='/meganhallconsulting/schedule'>Work With Me</NavLink>
                    </li>
                    <li>
                      <NavLink to='/meganhallconsulting/blog'>Blog</NavLink>
                    </li>
                    <li>
                      <NavLink to='/meganhallconsulting/products'>Products</NavLink>
                    </li>
                    <li>
                      <NavLink to='/meganhallconsulting/contact'>Contact</NavLink>
                    </li>
                </ul>
            </button>
        </div>
    </div>
  )
}

export default MenuOpen;
