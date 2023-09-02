import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div className='footer-container'>
        <p>ⓒ 2022 Megan Hall Consulting</p>
        <div className='contact-info-div'>
            <a id='profile-link' className='contact-info' href='https://www.instagram.com/?hl=en' target='_blank' rel='noreferrer'><FontAwesomeIcon icon="fa-brands fa-instagram" /> Instagram</a>
            <a id='profile-link' className='contact-info' href='https://www.linkedin.com/in/megan-hall-30112014b/' target='_blank' rel='noreferrer'><FontAwesomeIcon icon="fa-brands fa-linkedin-in" />LinkedIn</a>
            <a id='profile-link' className='contact-info' href='mailto:meghall@ucdavis.edu' target='_blank' rel='noreferrer'><FontAwesomeIcon icon="fa-regular fa-envelope" />Email</a>
        </div>
        <NavLink to='/policies' className='disclosure'>Disclosure</NavLink>
    </div>
  )
}

export default Footer;
