import React from 'react'
import Content from '../Content/Content.tsx'
import './FootballTeam.css'
import { billsLogo } from '../../constants/teamsLogos.ts'
import { BUFFALO_BILLS_LABEL } from '../../constants/labels.ts'
import { billsWordmark } from '../../constants/teamWordmark.ts'

function FotballTeam(): JSX.Element {


  return (
    <Content>
      <div className='football-team'>
        <div className='football-team__header'>
          <div className='football-team__name'>{BUFFALO_BILLS_LABEL}</div>
          <img className='football-team__logo' src={billsLogo} alt={BUFFALO_BILLS_LABEL} />

        </div>

      </div>
    </Content>
  )
}

export default FotballTeam
