import React from 'react'
import Content from '../Content/Content.tsx'
import TeamInfo from '../TeamInfo/TeamInfo.tsx'
import './FootballTeam.css'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/rootReducer.ts'


function FotballTeam(): JSX.Element {
  const { label, logo, division, conference } = useSelector((state: RootState) => ({
    label: state.teamActive.label,
    logo: state.teamActive.logo,
    division: state.teamActive.division,
    conference: state.teamActive.conference
  })
  )

  return (
    <Content>
      <div className='football-team'>
        <div className='football-team__container'>
          <div className='football-team__info'>
            <div className='football-team__name'>{label}</div>
            <div className='football-team__location'>{`${conference}, ${division}`}</div>
          </div>
          <div className='football-team__logo-container'>
            <img className='football-team__logo' src={logo} alt={label} />
          </div>
        </div>
      </div>
      <TeamInfo />
    </Content>
  )
}

export default FotballTeam
