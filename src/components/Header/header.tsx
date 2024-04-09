import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import logoHeader from '../../images/logos/NFL_logo-min.svg'
import './header.css'
import SubMenu from '../SubMenu/SubMenu.tsx'
import { GAME_HISTORY, GAME_RULES } from '../../constants/subMenuItems.ts'
import MouseCoordinates from '../../interfaces/MouseCoordinates'
import MenuItem from '../../interfaces/MenuItem'

function Header(): JSX.Element {
  const [activeMenuItem, setActiveMenuItem] = useState<MenuItem[]>([])
  const [subMenuPosition, setSubMenuPosition] = useState<MouseCoordinates>({ x: 0, y: 0 })

  const handleMouseEnter = (event: React.MouseEvent<HTMLLIElement>, menuItems: MenuItem[]) => {
    const { offsetLeft, offsetTop, offsetHeight } = event.currentTarget;
    setActiveMenuItem(menuItems)
    setSubMenuPosition({
      x: offsetLeft,
      y: offsetTop + offsetHeight
    })
  }

  const handleMouseLeave = () => {
    setActiveMenuItem([]);
  };

  return (
    <header className="header">
      <img className="header__logo" src={logoHeader} alt="Логотип Место" />
      <nav className='header__navigation'>
        <ul className='header__links-container'>
          <li className='header__links-container_item'
            onMouseEnter={(e) => handleMouseEnter(e, [GAME_HISTORY, GAME_RULES])}
            onMouseLeave={() => handleMouseLeave()}>
            Об игре
          </li>
          <li className='header__links-container_item'>Лига</li>
          <li className='header__links-container_item'>Команды</li>
          <li className='header__links-container_item'>Чемпионы</li>
        </ul>
      </nav>

      {activeMenuItem && (
        <SubMenu items={activeMenuItem} position={subMenuPosition} />
      )}
    </header>
  );
}

export default Header
