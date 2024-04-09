import React from 'react'
import './SubMenu.css'
import { Link } from 'react-router-dom'
import MenuItem from '../../interfaces/MenuItem'
import MouseCoordinates from '../../interfaces/MouseCoordinates'

interface SubMenuProps {
  items: MenuItem[],
  position: MouseCoordinates,
  isOpened: boolean,
  stateChanger: (newState: boolean) => void
}

function SubMenu({ items, position, isOpened, stateChanger }: SubMenuProps): JSX.Element {
  const { x, y } = position
  const submenuStyle: React.CSSProperties = {
    position: 'absolute',
    left: `${x}px`,
    top: `${y}px`
  }

  const handleSubMenuMouseEnter = () => {
    stateChanger(true)
  }

  const handleSubMenuMouseLeave = () => {
    stateChanger(false)
  }

  return (
    <ul className={`submenu ${isOpened && 'submenu_opened'}`} style={submenuStyle} onMouseEnter={handleSubMenuMouseEnter} onMouseLeave={handleSubMenuMouseLeave}>
      {items.map((item, index) => (
        <li key={index} className='submenu__item'>
          <Link to={item.link} className='submenu__link'>{item.label}</Link>
        </li>
      ))}
    </ul>
  )
}

export default SubMenu
