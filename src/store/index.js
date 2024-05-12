import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "./rootReducer.ts"

export default configureStore({
  reducer: rootReducer
})
