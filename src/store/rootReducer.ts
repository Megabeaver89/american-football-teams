import { combineReducers } from "@reduxjs/toolkit"
import subMenuReducer from "./slices/subMenuSlice.ts"

const rootReducer = combineReducers({
  submenu: subMenuReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
