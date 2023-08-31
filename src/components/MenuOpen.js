import React, { useState } from 'react'
import Menu from './Menu';
import { Link, NavLink } from 'react-router-dom';

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
                      <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                      <NavLink to='/about'>About</NavLink>
                    </li>
                    <li>
                      <NavLink to='/schedule'>Work With Me</NavLink>
                    </li>
                    <li>
                      <NavLink to='/blog'>Blog</NavLink>
                    </li>
                    <li>
                      <NavLink to='/products'>Products</NavLink>
                    </li>
                    <li>
                      <NavLink to='/contact'>Contact</NavLink>
                    </li>
                </ul>
            </button>
        </div>
    </div>
  )
}

export default MenuOpen;
