import React from 'react';
import './Navbar.css';
import logo_light from '../../assets/logo-black.png';
import logo_dark from '../../assets/logo-white.png';
import search_icon_light from '../../assets/search-w.png';
import search_icon_dark from '../../assets/search-b.png';
import toogle_light from '../../assets/night.png';
import toogle_dark from '../../assets/day.png';

function Navbar() {
  return (
    <div className='navbar'>
      <img src={logo_light} alt='logo pic' className='logo' />
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Features</li>
        <li>About</li>
      </ul>

      <div className='search-box'>
        <input type='text' placeholder='Search' />
        <img src={search_icon_light} alt='search pic' />
      </div>

      <img src={toogle_light} alt='toogle pic' className='toggle-icon' />
    </div>
  );
}

export default Navbar;
