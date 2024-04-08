import React from 'react'
import './SubMenu.css'
import { Link } from 'react-router-dom'

interface SubMenuProps {
  name: string,
  items: MenuItems[],
}

interface MenuItems {
  label: string,
  link: string,
}

function SubMenu({ name, items }: SubMenuProps): JSX.Element {
  return (
    <ul className='submenu'>
      {items.map((item, index) => (
        <li key={index} className='submenu__item'>
          <Link to={item.link} className='submenu__link'>{item.label}</Link>
        </li>
      ))}
    </ul>
  )
}

export default SubMenu
