import React from 'react'
import './SubMenu.css'
import { Link } from 'react-router-dom'
import MenuItem from '../../interfaces/MenuItem'
import MouseCoordinates from '../../interfaces/MouseCoordinates'

interface SubMenuProps {
  items: MenuItem[],
  position: MouseCoordinates
}

function SubMenu({ items, position }: SubMenuProps): JSX.Element {
  const { x, y } = position
  const submenuStyle: React.CSSProperties = {
    position: 'absolute',
    left: `${x}px`,
    top: `${y}px`
  };

  return (
    <ul className='submenu' style={submenuStyle}>
      {items.map((item, index) => (
        <li key={index} className='submenu__item'>
          <Link to={item.link} className='submenu__link'>{item.label}</Link>
        </li>
      ))}
    </ul>
  )
}

export default SubMenu
