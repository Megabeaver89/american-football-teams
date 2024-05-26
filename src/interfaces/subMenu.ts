import { Pathname, Label } from '../types/submenuTypes'
import MouseCoordinates from './MouseCoordinates'

export interface MenuItem {
  label: Label,
  link: Pathname,
  logo?: string,
  conference?: string,
  division?: string
}

export interface MenuState {
  activeMenuItems: MenuItem[];
  isOpenedSubMenu: boolean;
  position: MouseCoordinates;
}
