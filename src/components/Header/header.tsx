import React from 'react'
import logoHeader from '../../images/logos/NFL_logo-min.svg'
import './header.css'
import SubMenu from '../SubMenu/SubMenu.tsx'
import SUBMENU_ITEMS from '../../constants/subMenuItems.ts'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/rootReducer.ts'
import useMouseHandler from '../../hooks/useMouseHandler.ts'
import { Link } from 'react-router-dom'
import { LOGIN_PATHNAME, REGISTER_PATHNAME } from '../../constants/pathName.ts'
import { HEADER_NAV_LINKS, REGISTRATION, SIGN_IT } from '../../constants/labels.ts'

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
            {SUBMENU_ITEMS.map((item, index) => {
              return (
                <li className={`header__link ${isOpenedSubMenu && activeMenuItems === item[index] && 'header__link_active'}`}
                  onMouseEnter={handleMouseEnter(item)}
                  onMouseLeave={handleMouseLeave}>
                  {HEADER_NAV_LINKS[index]}
                </li>
              )
            })}
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
