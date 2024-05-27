import Team from '../types/interfaces/Team'
import { MenuItem } from '../types/interfaces/SubMenu'

export type Pathname = '/sign-up' | '/sign-in' | '/' | '*' | '/game-history' | '/rules' | '/nfl-history' | '/league-structure' | '/season-structure' | '/draft'
  | '/cardinals' | '/falcons' | '/ravens' | '/bills' | '/panthers' | '/bears' | '/bengals' | '/browns' | '/cowboys' | '/broncos'
  | '/lions' | '/packers' | '/texans' | '/colts' | '/jaguars' | '/chiefs' | '/raiders' | '/chargers' | '/rams' | '/dolphins'
  | '/vikings' | '/patriots' | '/saints' | '/giants' | '/jets' | '/eagles' | '/steelers' | '/49ers' | '/seahawks'
  | '/buccaneers' | '/titans' | '/commanders' | '/what-is-superbowl' | '/superbowl-champions'

export type Label = '' | 'История' | 'Правила' | 'История лиги' | 'Структура лиги' | 'Структура сезона' | 'Драфт' | 'Что это?' | 'Чемпионы'
  | 'Arizona Cardinals' | 'Atlanta Falcons' | 'Baltimore Ravens' | 'Buffalo Bills' | 'Carolina Panthers' | 'Chicago Bears'
  | 'Cincinnati Bengals' | 'Cleveland Browns' | 'Dallas Cowboys' | 'Denver Broncos' | 'Detroit Lions' | 'Green Bay Packers' | 'Houston Texans'
  | 'Indianapolis Colts' | 'Jacksonville Jaguars' | 'Kansas City Chiefs' | 'Las Vegas Raiders' | 'Los Angeles Chargers' | 'Los Angeles Rams'
  | 'Miami Dolphins' | 'Minnesota Vikings' | 'New England Patriots' | 'New Orleans Saints' | 'New York Giants' | 'New York Jets' | 'Philadelphia Eagles'
  | 'Pittsburgh Steelers' | 'San Francisco 49ers' | 'Seattle Seahawks' | 'Tampa Bay Buccaneers' | 'Tennessee Titans' | 'Washington Commanders'

export type SubMenuItems = MenuItem[] | Team[]
export type SubMenuItem = MenuItem | Team
