import './TeamInfoNavigation.css'
import React, { useState } from 'react'
import ActiveButtonState from '../../types/interfaces/ActiveButtonState.ts'
import { teamInfoList } from '../../constants/teamInfo.ts'

function TeamInfo(): JSX.Element {

  const [activeBtn, setActiveBtn] = useState<ActiveButtonState>({
    num: 0,
  })

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
      <div className='team-info__btn'>22222</div>
    </>
  )
}

export default TeamInfo
