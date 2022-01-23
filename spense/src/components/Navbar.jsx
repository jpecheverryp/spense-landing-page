import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <span className='navbar__brand'>spense.</span>
      <ul className='navbar__pages navbar__links'>
        <li className='navbar__item'>Business</li>
        <li className='navbar__item'>Pricing</li>
        <li className='navbar__item'>Features</li>
      </ul>
      <ul className='navbar__login navbar__links'>
        <li className='navbar__item'>Login</li>
        <li className='navbar__item navbar__register'>Get Started</li>
      </ul>
    </nav>
  );
};

export default Navbar;
