import React from 'react';
// import { Link } from 'react-router-dom';
import logoHeader from '../images/logos/NFL_logo-min.svg'

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logoHeader} alt="Логотип Место" />
      <ul className='header__links-container'>
        {/* <li><Link to='/' className='header__link'>Выйти</Link></li> */}


      </ul>
    </header>
  );
}

export default Header
