import { Pathname, Label, SubMenuItems } from '../submenuTypes'
import MouseCoordinates from './MouseCoordinates'

export interface MenuItem {
  label: Label,
  link: Pathname,
}

export interface MenuState {
  activeMenuItems: SubMenuItems;
  isOpenedSubMenu: boolean;
  position: MouseCoordinates;
}

