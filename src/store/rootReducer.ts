import { combineReducers } from "@reduxjs/toolkit"
import subMenuReducer from "./slices/subMenuSlice.ts"
import teamActiveSlice from "./slices/teamActiveSlice.ts"

const rootReducer = combineReducers({
  submenu: subMenuReducer,
  teamActive: teamActiveSlice
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
