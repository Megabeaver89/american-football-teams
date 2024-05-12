import React from 'react'
import './SubMenu.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/rootReducer'
import { toggleSubMenu } from '../../store/slices/subMenuSlice.ts'


function SubMenu(): JSX.Element {
  const { isOpened, items, position } = useSelector((state: RootState) => ({
    isOpened: state.submenu.isOpenedSubMenu,
    items: state.submenu.activeMenuItems,
    position: state.submenu.position
  })
  )
  const dispatch = useDispatch()
  const { x, y } = position
  const submenuStyle: React.CSSProperties = {
    position: 'absolute',
    left: `${x}px`,
    top: `${y}px`
  }

  const handleSubMenuMouseEnter = () => {
    dispatch(toggleSubMenu(true))
  }

  const handleSubMenuMouseLeave = () => {
    dispatch(toggleSubMenu(false))
  }

  return (
    <ul className={`submenu ${isOpened && 'submenu_opened'}`}
      style={submenuStyle}
      onMouseEnter={handleSubMenuMouseEnter}
      onMouseLeave={handleSubMenuMouseLeave}>
      {items.map((item, index) => (
        <li key={index} className='submenu__item'>
          <Link to={item.link} className='submenu__link'>
            {item.logo && <img className='submenu_link-logo' src={item.logo} alt={`${item.label}-logo`} />}
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default SubMenu
