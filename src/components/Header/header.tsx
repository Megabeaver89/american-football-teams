import React from 'react'
import logoHeader from '../../images/logos/NFL_logo-min.svg'
import './header.css'
import SubMenu from '../SubMenu/SubMenu.tsx'
import { ABOUT_GAME_SUBMENU, NFL_SUBMENU, SUPERBOWL_SUBMENU, TEAMS_SUBMENU } from '../../constants/subMenuItems.ts'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/rootReducer.ts'
import useMouseHandler from '../../hooks/useMouseHandler.ts'
import { Link } from 'react-router-dom'
import { LOGIN_PATHNAME, REGISTER_PATHNAME } from '../../constants/pathName.ts'
import { ABOUt_GAME, NFL, REGISTRATION, SIGN_IT, SUPERBOWL, TEAMS } from '../../constants/headerNavLink.ts'

function Header(): JSX.Element {

  const { isOpenedSubMenu, activeMenuItems } = useSelector((state: RootState) => ({
    isOpenedSubMenu: state.submenu.isOpenedSubMenu,
    activeMenuItems: state.submenu.activeMenuItems
  })
  )
  const { handleMouseEnter, handleMouseLeave } = useMouseHandler()
  return (
    <header className="header">
      <img className="header__logo" src={logoHeader} alt="Логотип Место" />
      <div className='header__container'>
        <nav className='header__navigation'>
          <ul className='header__links-container'>
            <li className={`header__link ${isOpenedSubMenu && activeMenuItems === ABOUT_GAME_SUBMENU && 'header__link_active'}`}
              onMouseEnter={handleMouseEnter(ABOUT_GAME_SUBMENU)}
              onMouseLeave={handleMouseLeave}>
              {ABOUt_GAME}
            </li>
            <li className={`header__link ${isOpenedSubMenu && activeMenuItems === NFL_SUBMENU && 'header__link_active'}`}
              onMouseEnter={handleMouseEnter(NFL_SUBMENU)}
              onMouseLeave={handleMouseLeave}>
              {NFL}
            </li>
            <li className={`header__link ${isOpenedSubMenu && activeMenuItems === TEAMS_SUBMENU && 'header__link_active'}`}
              onMouseEnter={handleMouseEnter(TEAMS_SUBMENU)}
              onMouseLeave={handleMouseLeave}>
              {TEAMS}
            </li>
            <li className={`header__link ${isOpenedSubMenu && activeMenuItems === SUPERBOWL_SUBMENU && 'header__link_active'}`}
              onMouseEnter={handleMouseEnter(SUPERBOWL_SUBMENU)}
              onMouseLeave={handleMouseLeave}>
              {SUPERBOWL}
            </li>
          </ul>
        </nav>
        <div className='header__links-container'>
          <Link to={REGISTER_PATHNAME} className='header__link header__link_background_white'>{REGISTRATION}</Link>
          <Link to={LOGIN_PATHNAME} className='header__link header__link_background_white'>{SIGN_IT}</Link>
        </div>
      </div>


      <SubMenu />
    </header>
  )
}

export default Header
