import React from 'react'
import './SubMenu.css'
import '../App/App.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/rootReducer'
import useMouseHandler from '../../hooks/useMouseHandler.ts'


function SubMenu(): JSX.Element {
  const { isOpened, items, position } = useSelector((state: RootState) => ({
    isOpened: state.submenu.isOpenedSubMenu,
    items: state.submenu.activeMenuItems,
    position: state.submenu.position
  })
  )

  const { handleMouseEnter, handleMouseLeave } = useMouseHandler()
  const { x, y } = position
  const submenuStyle: React.CSSProperties = {
    position: 'absolute',
    left: `${x}px`,
    top: `${y}px`
  }

  return (
    <ul className={`submenu ${isOpened && 'submenu_opened'}`}
      style={submenuStyle}
      onMouseEnter={handleMouseEnter(items, false)}
      onMouseLeave={handleMouseLeave}>
      {items.map((item, index) => (
        <li key={index}
          className='submenu__item'>
          <Link to={item.link} className='link submenu__link'>
            {item.logo && <img className='submenu_link-logo' src={item.logo} alt={`${item.label}-logo`} />}
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default SubMenu
