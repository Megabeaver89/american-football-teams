import {
  GAME_HISTORY_PATHNAME,
  GAME_RULES_PATHNAME,
  NFL_HISTORY_PATHNAME,
  LEAGUE_STRUCTURE_PATHNAME,
  SEASON_STRUCTURE_PATHNAME,
  DRAFT_PATHNAME,
  SUPERBOWL_CHAMPIONS_PATHNAME,
  SUPERBOWL_WHAT_IS_PATHNAME
} from "./pathName.ts"
import {
  GAME_HISTORY_LABEL,
  GAME_RULES_LABEL,
  NFL_HISTORY_LABEL,
  LEAGUE_STRUCTURE_LABEL,
  SEASON_STRUCTURE_LABEL,
  DRAFT_LABEL,
  SUPERBOWL_CHAMPIONS_LABEL,
  SUPERBOWL_WHAT_IS_LABEL
} from "./subMenuLabels.ts"
import MenuItem from "../interfaces/MenuItem.ts"

const GAME_HISTORY: MenuItem = {
  label: GAME_HISTORY_LABEL,
  link: GAME_HISTORY_PATHNAME
}

const GAME_RULES: MenuItem = {
  label: GAME_RULES_LABEL,
  link: GAME_RULES_PATHNAME
}

const NFL_HISTORY: MenuItem = {
  label: NFL_HISTORY_LABEL,
  link: NFL_HISTORY_PATHNAME
}

const LEAGUE_STRUCTURE: MenuItem = {
  label: LEAGUE_STRUCTURE_LABEL,
  link: LEAGUE_STRUCTURE_PATHNAME
}

const SEASON_STRUCTURE: MenuItem = {
  label: SEASON_STRUCTURE_LABEL,
  link: SEASON_STRUCTURE_PATHNAME
}

const DRAFT: MenuItem = {
  label: DRAFT_LABEL,
  link: DRAFT_PATHNAME
}

const SUPERBOWL_WHAT_IS: MenuItem = {
  label: SUPERBOWL_WHAT_IS_LABEL,
  link: SUPERBOWL_WHAT_IS_PATHNAME
}

const SUPERBOWL_CHAMPIONS: MenuItem = {
  label: SUPERBOWL_CHAMPIONS_LABEL,
  link: SUPERBOWL_CHAMPIONS_PATHNAME
}

export const ABOUT_GAME_SUBMENU: MenuItem[] = [GAME_HISTORY, GAME_RULES]
export const NFL_SUBMENU: MenuItem[] = [NFL_HISTORY, LEAGUE_STRUCTURE, SEASON_STRUCTURE, DRAFT]
export const SUPERBOWL_SUBMENU: MenuItem[] = [SUPERBOWL_WHAT_IS, SUPERBOWL_CHAMPIONS]
