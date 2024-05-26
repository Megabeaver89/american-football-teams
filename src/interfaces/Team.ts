import { Pathname, Label } from '../types/submenuTypes'

export default interface Team {
  label: Label,
  link: Pathname,
  logo: string,
  conference: string,
  division: string
}

