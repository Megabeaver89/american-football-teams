import React from 'react'
import './SubMenu.css'
import '../App/App.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/rootReducer'
import useMouseHandler from '../../hooks/useMouseHandler.ts'
import { changeTeamActive } from '../../store/slices/teamActiveSlice.ts'
import Team from '../../types/interfaces/Team.ts'
import { toggleSubMenu } from '../../store/slices/subMenuSlice.ts'
import { SubMenuItem } from '../../types/submenuTypes.ts'
import { isTeam } from '../../types/typesGuards/TeamTypeGuard.ts'

function SubMenu(): JSX.Element {
  const dispatch = useDispatch()
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

  const handleClickLink = (newTeam?: Team,) => () => {
    dispatch(toggleSubMenu(false))
    newTeam && dispatch(changeTeamActive(newTeam))
  }

  return (
    <ul className={`submenu ${isOpened && 'submenu_opened'}`}
      style={submenuStyle}
      onMouseEnter={handleMouseEnter(items, false)}
      onMouseLeave={handleMouseLeave}>
      {items.map((item: SubMenuItem, index: number) => (
        <li key={index}
          className='submenu__item'>
          <Link to={item.link}
            className='link submenu__link'
            onClick={handleClickLink(isTeam(item) ? item : undefined)}>
            {isTeam(item) && <img className='submenu_link-logo' src={item.logo} alt={`${item.label}-logo`} />}
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default SubMenu
