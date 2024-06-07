import './TeamInfoNavigation.css'
import React, { useState } from 'react'
import ActiveButtonState from '../../types/interfaces/ActiveButtonState.ts'
import { teamInfoList } from '../../constants/teamInfo.ts'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/rootReducer.ts'

function TeamInfoNavigation(): JSX.Element {

  const [activeBtn, setActiveBtn] = useState<ActiveButtonState>({
    num: 0,
  })

  const { history, stadium } = useSelector((state: RootState) => ({
    history: state.teamActive.history,
    stadium: state.teamActive.stadium
  })
  )

  const handleClickBtn = (index: number) => {
    setActiveBtn({
      num: index
    })
  }

  return (
    <><ul className='team-info'>
      {teamInfoList.map((word, index) => {
        return (<li key={index} className='team-info__item'>
          <button
            className={`team-info__btn ${activeBtn.num === index ? 'team-info__btn_active' : ''}`}
            onClick={() => handleClickBtn(index)}>
            {word}
          </button>
        </li>)
      })}
    </ul>
      <div className='team-info__btn'>{history}</div>
    </>
  )
}

export default TeamInfoNavigation
