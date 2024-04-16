import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
import logoHeader from '../../images/logos/NFL_logo-min.svg'

import './header.css'
import SubMenu from '../SubMenu/SubMenu.tsx'
import { ABOUT_GAME_SUBMENU, NFL_SUBMENU, SUPERBOWL_SUBMENU, TEAMS_SUBMENU } from '../../constants/subMenuItems.ts'
import MouseCoordinates from '../../interfaces/MouseCoordinates'
import MenuItem from '../../interfaces/MenuItem'

function Header(): JSX.Element {
  const [activeMenuItem, setActiveMenuItem] = useState<MenuItem[]>([])
  const [isOpenedSubMenu, setIsOpenedSubMenu] = useState<boolean>(false)
  const [subMenuPosition, setSubMenuPosition] = useState<MouseCoordinates>({ x: 0, y: 0 })

  const handleMouseEnter = (event: React.MouseEvent<HTMLLIElement>, menuItems: MenuItem[]) => {
    const { offsetLeft, offsetTop } = event.currentTarget;
    setActiveMenuItem(menuItems)
    setIsOpenedSubMenu(true)
    setSubMenuPosition({
      x: offsetLeft,
      y: offsetTop + 35
    })
  }

  const handleMouseLeave = () => {
    setIsOpenedSubMenu(false)
  }

  return (
    <header className="header">
      <img className="header__logo" src={logoHeader} alt="Логотип Место" />
      <nav className='header__navigation'>
        <ul className='header__links-container'>
          <li className={`header__link ${isOpenedSubMenu && activeMenuItem === ABOUT_GAME_SUBMENU && 'header__link_active'}`}
            onMouseEnter={(e) => handleMouseEnter(e, ABOUT_GAME_SUBMENU)}
            onMouseLeave={() => handleMouseLeave()}>
            Об игре
          </li>
          <li className={`header__link ${isOpenedSubMenu && activeMenuItem === NFL_SUBMENU && 'header__link_active'}`}
            onMouseEnter={(e) => handleMouseEnter(e, NFL_SUBMENU)}
            onMouseLeave={() => handleMouseLeave()}>
            NFL
          </li>
          <li className={`header__link ${isOpenedSubMenu && activeMenuItem === TEAMS_SUBMENU}`}
            onMouseEnter={(e) => handleMouseEnter(e, TEAMS_SUBMENU)}
            onMouseLeave={() => handleMouseLeave()}>
            Команды
          </li>
          <li className={`header__link ${isOpenedSubMenu && activeMenuItem === SUPERBOWL_SUBMENU && 'header__link_active'}`}
            onMouseEnter={(e) => handleMouseEnter(e, SUPERBOWL_SUBMENU)}
            onMouseLeave={() => handleMouseLeave()}>
            Superbowl
          </li>
        </ul>
      </nav>

      {activeMenuItem && (
        <SubMenu
          items={activeMenuItem}
          position={subMenuPosition}
          isOpened={isOpenedSubMenu}
          stateChanger={setIsOpenedSubMenu}
        />
      )}
    </header>
  );
}

export default Header
