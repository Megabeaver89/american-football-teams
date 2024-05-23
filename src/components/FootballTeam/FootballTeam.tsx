import React from 'react'
import Content from '../Content/Content.tsx'
import './FootballTeam.css'
import { billsLogo } from '../../constants/teamsLogos.ts'
import { BUFFALO_BILLS_LABEL } from '../../constants/teamLabels.ts'
import { billsWordmark } from '../../constants/teamWordmark.ts'

function FotballTeam(): JSX.Element {

  const headerStyle: React.CSSProperties = {
    backgroundImage: `url(${billsLogo})`
  }
  return (
    <Content>
      <div className='football-team'>
        <div className='football-team__header' style={headerStyle}>
          <div className='football-team__info'>{BUFFALO_BILLS_LABEL}</div>
          {/* <img src={billsWordmark} alt={BUFFALO_BILLS_LABEL} /> */}

        </div>

      </div>
    </Content>
  )
}

export default FotballTeam
