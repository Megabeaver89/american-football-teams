import React from 'react';
// import { Link } from 'react-router-dom';
import logoHeader from '../images/logos/NFL_logo-min.svg'

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logoHeader} alt="Логотип Место" />
      <div className='header__links-container'>
        {/* {isLoggedIn
          ? <>
            <p className='header__email'>{userEmail}</p>
            <Link to='/sign-in' className='header__link' onClick={onLinkClick}>Выйти</Link>
          </>
          : <Link to={isRegistration ? '/sign-in' : '/sign-up'} className='header__link' onClick={onLinkClick}>
            {isRegistration ? 'Войти' : 'Регистрация'}
          </Link>
        } */}
      </div>
    </header>
  );
}

export default Header
