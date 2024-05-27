import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { MenuState } from "../../types/interfaces/SubMenu"
import MouseCoordinates from "../../types/interfaces/MouseCoordinates.ts"
import { SubMenuItems } from "../../types/submenuTypes"

const initialState: MenuState = {
  activeMenuItems: [],
  isOpenedSubMenu: false,
  position: {
    x: 0,
    y: 0
  }
}

export const subMenuSlice = createSlice({
  name: 'subMenu',
  initialState,
  reducers: {
    toggleSubMenu(state, action: PayloadAction<boolean>) {
      state.isOpenedSubMenu = action.payload
    },
    fillSubMenu(state, action: PayloadAction<SubMenuItems>) {
      state.activeMenuItems = action.payload
    },
    changePosition(state, action: PayloadAction<MouseCoordinates>) {
      state.position.x = action.payload.x
      state.position.y = action.payload.y
    },
    clearSubMenu(state) {
      state.activeMenuItems = []
    }
  }
})

export const { toggleSubMenu, fillSubMenu, changePosition, clearSubMenu } = subMenuSlice.actions
export default subMenuSlice.reducer
