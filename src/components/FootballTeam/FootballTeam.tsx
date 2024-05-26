import React from 'react'
import Content from '../Content/Content.tsx'
import './FootballTeam.css'
import { BUFFALO_BILLS_TEAM } from '../../constants/team.ts'

function FotballTeam(): JSX.Element {

  const { label, link, logo, division, conference } = BUFFALO_BILLS_TEAM

  return (
    <Content>
      <div className='football-team'>
        <div className='football-team__container'>
          <div className='football-team__info'>
            <div className='football-team__name'>{label}</div>
            <div className='football-team__location'>{`${conference}, ${division}`}</div>
          </div>
          <img className='football-team__logo' src={logo} alt={label} />

        </div>

      </div>
    </Content>
  )
}

export default FotballTeam
