import { Pathname, Label } from '../submenuTypes'

export default interface Team {
  label: Label,
  link: Pathname,
  logo: string,
  conference: string,
  division: string,
  wordmark: string,
  uniform: string,
  historyTeam: string,
  stadium: string,
}

