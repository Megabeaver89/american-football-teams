import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import InfoButtonsList from '../../types/interfaces/InfoButtonsList'


const initialState: InfoButtonsList = {
  btnList: [],
  infoList: [],
  activeBtnNum: NaN,
  info: ''
}

export const infoButtonsListSlice = createSlice({
  name: 'infoButtons',
  initialState,
  reducers: {
    changeActiveButton(state, action: PayloadAction<{ activeBtnNum: number }>) {
      state.activeBtnNum = action.payload.activeBtnNum
    },
    changeActiveInfo(state, action: PayloadAction<{ info: string }>) {
      state.info = action.payload.info
    },
    changeButtonsList(state, action: PayloadAction<{ btnList: string[] }>) {
      state.btnList = action.payload.btnList
    },
    changeInfoList(state, action: PayloadAction<{ infoList: string[] }>) {
      state.infoList = action.payload.infoList
    }
  }
})

export const { changeActiveButton, changeButtonsList, changeActiveInfo, changeInfoList } = infoButtonsListSlice.actions
export default infoButtonsListSlice.reducer
