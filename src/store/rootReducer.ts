import { combineReducers } from "@reduxjs/toolkit"
import subMenuReducer from "./slices/subMenuSlice.ts"
import teamActiveSlice from "./slices/teamActiveSlice.ts"
import infoButtonsListSlice from "./slices/infoButtonsListSlice.ts"

const rootReducer = combineReducers({
  submenu: subMenuReducer,
  teamActive: teamActiveSlice,
  infoButtonsList: infoButtonsListSlice
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
