import { Pathname, Label } from '../types/submenuTypes'

interface MenuItem {
  label: Label,
  link: Pathname,
  logo?: string
}
export default MenuItem
