import React from 'react'
import logoHeader from '../../images/logos/NFL_logo-min.svg'
import './header.css'
import SubMenu from '../SubMenu/SubMenu.tsx'
import { ABOUT_GAME_SUBMENU, NFL_SUBMENU, SUPERBOWL_SUBMENU, TEAMS_SUBMENU } from '../../constants/subMenuItems.ts'
import { MenuItem } from '../../interfaces/subMenu.ts'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/rootReducer.ts'
import { changePosition, fillSubMenu, toggleSubMenu } from '../../store/slices/subMenuSlice.ts'

function Header(): JSX.Element {
  const dispatch = useDispatch()

  const { isOpenedSubMenu, activeMenuItems } = useSelector((state: RootState) => ({
    isOpenedSubMenu: state.submenu.isOpenedSubMenu,
    activeMenuItems: state.submenu.activeMenuItems
  })
  )

  const handleMouseEnter = (event: React.MouseEvent<HTMLLIElement>, menuItems: MenuItem[]) => {
    const { offsetLeft, offsetTop } = event.currentTarget;
    dispatch(changePosition({
      x: offsetLeft,
      y: offsetTop + 35
    }))
    dispatch(fillSubMenu(menuItems))
    dispatch(toggleSubMenu(true))
  }

  const handleMouseLeave = () => {
    dispatch(toggleSubMenu(false))
  }

  return (
    <header className="header">
      <img className="header__logo" src={logoHeader} alt="Логотип Место" />
      <nav className='header__navigation'>
        <ul className='header__links-container'>
          <li className={`header__link ${isOpenedSubMenu && activeMenuItems === ABOUT_GAME_SUBMENU && 'header__link_active'}`}
            onMouseEnter={(e) => handleMouseEnter(e, ABOUT_GAME_SUBMENU)}
            onMouseLeave={() => handleMouseLeave()}>
            Об игре
          </li>
          <li className={`header__link ${isOpenedSubMenu && activeMenuItems === NFL_SUBMENU && 'header__link_active'}`}
            onMouseEnter={(e) => handleMouseEnter(e, NFL_SUBMENU)}
            onMouseLeave={() => handleMouseLeave()}>
            NFL
          </li>
          <li className={`header__link ${isOpenedSubMenu && activeMenuItems === TEAMS_SUBMENU && 'header__link_active'}`}
            onMouseEnter={(e) => handleMouseEnter(e, TEAMS_SUBMENU)}
            onMouseLeave={() => handleMouseLeave()}>
            Команды
          </li>
          <li className={`header__link ${isOpenedSubMenu && activeMenuItems === SUPERBOWL_SUBMENU && 'header__link_active'}`}
            onMouseEnter={(e) => handleMouseEnter(e, SUPERBOWL_SUBMENU)}
            onMouseLeave={() => handleMouseLeave()}>
            Superbowl
          </li>
        </ul>
      </nav>

      <SubMenu />
    </header>
  );
}

export default Header
