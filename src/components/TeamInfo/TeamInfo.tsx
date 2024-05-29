import './TeamInfo.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function TeamInfo(): JSX.Element {

  const [activeBtn, setActiveBtn] = useState(false)

  return (
    <ul className='team-info'>
      <li className='team-info__item'>
        <button className='team-info__btn team-info__btn_active'>
          История
        </button>
      </li>
      <li className='team-info__item'>
        <button className='team-info__btn'>
          Стадион
        </button>
      </li>
      <li className='team-info__item'>
        <button className='team-info__btn'>
          Еще какая-то херня
        </button>
      </li>
    </ul>
  )
}

export default TeamInfo
