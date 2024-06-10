import './InfoNavigation.css'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/rootReducer.ts'
import { changeActiveButton, changeActiveInfo } from '../../store/slices/infoButtonsListSlice.ts'

function InfoNavigation(): JSX.Element {
  const dispatch = useDispatch()

  const { btnList, activeBtnNum, info, infoList } = useSelector((state: RootState) => ({
    btnList: state.infoButtonsList.btnList,
    activeBtnNum: state.infoButtonsList.activeBtnNum,
    info: state.infoButtonsList.info,
    infoList: state.infoButtonsList.infoList
  })
  )

  const handleClickBtn = (index: number, infoActive: string) => {
    dispatch(changeActiveButton({
      activeBtnNum: index,
    }))
    dispatch(changeActiveInfo({
      info: infoActive
    }))
  }


  return (
    <><ul className='team-info'>
      {btnList.map((word, index) => {
        return (<li key={index} className='team-info__item'>
          <button
            className={`team-info__btn ${activeBtnNum === index ? 'team-info__btn_active' : ''}`}
            onClick={() => handleClickBtn(index, infoList[index])}>
            {word}
          </button>
        </li>)
      })}
    </ul>
      <div className='team-info__btn'>{info}</div>
    </>
  )
}

export default InfoNavigation
