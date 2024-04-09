import { GAME_HISTORY_PATHNAME, GAME_RULES_PATHNAME } from "./pathName.ts"
import MenuItem from "../interfaces/MenuItem.ts"

export const GAME_HISTORY: MenuItem = {
  label: 'История',
  link: GAME_HISTORY_PATHNAME
}

export const GAME_RULES: MenuItem = {
  label: 'Правила',
  link: GAME_RULES_PATHNAME
}

