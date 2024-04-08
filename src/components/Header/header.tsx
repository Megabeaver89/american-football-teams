import React from 'react';
// import { Link } from 'react-router-dom';
import logoHeader from '../../images/logos/NFL_logo-min.svg'
import './header.css'

function Header(): JSX.Element {
  return (
    <header className="header">
      <img className="header__logo" src={logoHeader} alt="Логотип Место" />
      <ul className='header__links-container'>
        <li className='header__links-container_item'>Об игре</li>
        <li className='header__links-container_item'>Лига</li>
        <li className='header__links-container_item'>Команды</li>
        <li className='header__links-container_item'>Чемпионы</li>
      </ul>
      <span className='header__dropmenu'> я меню</span>
    </header>
  );
}

export default Header
