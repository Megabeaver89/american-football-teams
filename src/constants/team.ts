import { NORTH_DIVISION, EAST_DIVISION, WEST_DIVISION, SOUTH_DIVISION } from './footballDivision.ts'
import { AFC_CONFERENCE, NFC_CONFERENCE } from './footeballConfernce.ts'

import {
  ARIZONA_CARDINALS_PATHNAME,
  ATLANTA_FALCONS_PATHNAME,
  BALTIMORE_RAVENS_PATHNAME,
  BUFFALO_BILLS_PATHNAME,
  CAROLINA_PANTHERS_PATHNAME,
  CHICAGO_BEARS_PATHNAME,
  CINCINNATI_BENGALS_PATHNAME,
  CLEVELAND_BROWNS_PATHNAME,
  DALLAS_COWBOYS_PATHNAME,
  DENVER_BRONCOS_PATHNAME,
  DETROIT_LIONS_PATHNAME,
  GREEN_BAY_PACKERS_PATHNAME,
  HOUSTON_TEXANS_PATHNAME,
  INDIANAPOLIS_COLTS_PATHNAME,
  JACKSONVILLE_JAGUARS_PATHNAME,
  KANSAS_CITY_CHIEFS_PATHNAME,
  LAS_VEGAS_RAIDERS_PATHNAME,
  LOS_ANGELES_CHARGERS_PATHNAME,
  LOS_ANGELES_RAMS_PATHNAME,
  MIAMI_DOLPHINS_PATHNAME,
  MINNESOTA_VIKINGS_PATHNAME,
  NEW_ENGLAND_PATRIOTS_PATHNAME,
  NEW_ORLEANS_SAINTS_PATHNAME,
  NEW_YORK_GIANTS_PATHNAME,
  NEW_YORK_JETS_PATHNAME,
  PHILADELPHIA_EAGLES_PATHNAME,
  PITTSBURGH_STEELERS_PATHNAME,
  SAN_FRANCISCO_49ERS_PATHNAME,
  SEATTLE_SEAHAWKS_PATHNAME,
  TAMPA_BAY_BUCCANEERS_PATHNAME,
  TENNESSEE_TITANS_PATHNAME,
  WASHINGTON_COMMANDERS_PATHNAME,
} from './pathName.ts'

import {
  ARIZONA_CARDINALS_LABEL,
  ATLANTA_FALCONS_LABEL,
  BALTIMORE_RAVENS_LABEL,
  BUFFALO_BILLS_LABEL,
  CAROLINA_PANTHERS_LABEL,
  CHICAGO_BEARS_LABEL,
  CINCINNATI_BENGALS_LABEL,
  CLEVELAND_BROWNS_LABEL,
  DALLAS_COWBOYS_LABEL,
  DENVER_BRONCOS_LABEL,
  DETROIT_LIONS_LABEL,
  GREEN_BAY_PACKERS_LABEL,
  HOUSTON_TEXANS_LABEL,
  INDIANAPOLIS_COLTS_LABEL,
  JACKSONVILLE_JAGUARS_LABEL,
  KANSAS_CITY_CHIEFS_LABEL,
  LAS_VEGAS_RAIDERS_LABEL,
  LOS_ANGELES_CHARGERS_LABEL,
  LOS_ANGELES_RAMS_LABEL,
  MIAMI_DOLPHINS_LABEL,
  MINNESOTA_VIKINGS_LABEL,
  NEW_ENGLAND_PATRIOTS_LABEL,
  NEW_ORLEANS_SAINTS_LABEL,
  NEW_YORK_GIANTS_LABEL,
  NEW_YORK_JETS_LABEL,
  PHILADELPHIA_EAGLES_LABEL,
  PITTSBURGH_STEELERS_LABEL,
  SAN_FRANCISCO_49ERS_LABEL,
  SEATTLE_SEAHAWKS_LABEL,
  TAMPA_BAY_BUCCANEERS_LABEL,
  TENNESSEE_TITANS_LABEL,
  WASHINGTON_COMMANDERS_LABEL
} from './labels.ts'

import {
  cardinalsLogo,
  falconsLogo,
  ravensLogo,
  billsLogo,
  panthersLogo,
  bearsLogo,
  bengalsLogo,
  brownsLogo,
  cowboysLogo,
  broncosLogo,
  lionsLogo,
  packersLogo,
  texansLogo,
  coltsLogo,
  jaguarsLogo,
  chiefsLogo,
  raidersLogo,
  chargersLogo,
  ramsLogo,
  dolphinsLogo,
  vikingsLogo,
  patriotsLogo,
  saintsLogo,
  giantsLogo,
  jetsLogo,
  eaglesLogo,
  steelersLogo,
  ersLogo,
  seahawksLogo,
  buccaneersLogo,
  titansLogo,
  commandersLogo
} from './teamsLogos.ts'

import {
  cardinalsUniform,
  falconsUniform,
  ravensUniform,
  billsUniform,
  panthersUniform,
  bearsUniform,
  bengalsUniform,
  brownsUniform,
  cowboysUniform,
  broncosUniform,
  lionsUniform,
  packersUniform,
  texansUniform,
  coltsUniform,
  jaguarsUniform,
  chiefsUniform,
  raidersUniform,
  chargersUniform,
  ramsUniform,
  dolphinsUniform,
  vikingsUniform,
  patriotsUniform,
  saintsUniform,
  giantsUniform,
  jetsUniform,
  eaglesUniform,
  steelersUniform,
  ersUniform,
  seahawksUniform,
  buccaneersUniform,
  titansUniform,
  commandersUniform
} from './teamUniforms.ts'

import {
  cardinalsWordmark,
  falconsWordmark,
  ravensWordmark,
  billsWordmark,
  panthersWordmark,
  bearsWordmark,
  bengalsWordmark,
  brownsWordmark,
  cowboysWordmark,
  broncosWordmark,
  lionsWordmark,
  packersWordmark,
  texansWordmark,
  coltsWordmark,
  jaguarsWordmark,
  chiefsWordmark,
  raidersWordmark,
  chargersWordmark,
  ramsWordmark,
  dolphinsWordmark,
  vikingsWordmark,
  patriotsWordmark,
  saintsWordmark,
  giantsWordmark,
  jetsWordmark,
  eaglesWordmark,
  steelersWordmark,
  ersWordmark,
  seahawksWordmark,
  buccaneersWordmark,
  titansWordmark,
  commandersWordmark
} from './teamWordmark.ts'

import Team from '../interfaces/Team.ts'

export const ARIZONA_CARDINALS_TEAM: Team = {
  label: ARIZONA_CARDINALS_LABEL,
  link: ARIZONA_CARDINALS_PATHNAME,
  logo: cardinalsLogo,
  conference: NFC_CONFERENCE,
  division: WEST_DIVISION,
  uniform: cardinalsUniform,
  wordmark: cardinalsWordmark
}

export const ATLANTA_FALCONS_TEAM: Team = {
  label: ATLANTA_FALCONS_LABEL,
  link: ATLANTA_FALCONS_PATHNAME,
  logo: falconsLogo,
  conference: NFC_CONFERENCE,
  division: SOUTH_DIVISION,
  uniform: falconsUniform,
  wordmark: falconsWordmark
}

export const BALTIMORE_RAVENS_TEAM: Team = {
  label: BALTIMORE_RAVENS_LABEL,
  link: BALTIMORE_RAVENS_PATHNAME,
  logo: ravensLogo,
  conference: AFC_CONFERENCE,
  division: NORTH_DIVISION,
  uniform: ravensUniform,
  wordmark: ravensWordmark
}

export const BUFFALO_BILLS_TEAM: Team = {
  label: BUFFALO_BILLS_LABEL,
  link: BUFFALO_BILLS_PATHNAME,
  logo: billsLogo,
  conference: AFC_CONFERENCE,
  division: EAST_DIVISION,
  uniform: billsUniform,
  wordmark: billsWordmark
}

export const CAROLINA_PANTHERS_TEAM: Team = {
  label: CAROLINA_PANTHERS_LABEL,
  link: CAROLINA_PANTHERS_PATHNAME,
  logo: panthersLogo,
  conference: NFC_CONFERENCE,
  division: SOUTH_DIVISION,
  uniform: panthersUniform,
  wordmark: panthersWordmark
}

export const CHICAGO_BEARS_TEAM: Team = {
  label: CHICAGO_BEARS_LABEL,
  link: CHICAGO_BEARS_PATHNAME,
  logo: bearsLogo,
  conference: NFC_CONFERENCE,
  division: NORTH_DIVISION,
  uniform: bearsUniform,
  wordmark: bearsWordmark
}

export const CINCINNATI_BENGALS_TEAM: Team = {
  label: CINCINNATI_BENGALS_LABEL,
  link: CINCINNATI_BENGALS_PATHNAME,
  logo: bengalsLogo,
  conference: AFC_CONFERENCE,
  division: NORTH_DIVISION,
  uniform: bengalsUniform,
  wordmark: bengalsWordmark
}

export const CLEVELAND_BROWNS_TEAM: Team = {
  label: CLEVELAND_BROWNS_LABEL,
  link: CLEVELAND_BROWNS_PATHNAME,
  logo: brownsLogo,
  conference: AFC_CONFERENCE,
  division: NORTH_DIVISION,
  uniform: brownsUniform,
  wordmark: brownsWordmark
}

export const DALLAS_COWBOYS_TEAM: Team = {
  label: DALLAS_COWBOYS_LABEL,
  link: DALLAS_COWBOYS_PATHNAME,
  logo: cowboysLogo,
  conference: NFC_CONFERENCE,
  division: EAST_DIVISION,
  uniform: cowboysUniform,
  wordmark: cowboysWordmark
}

export const DENVER_BRONCOS_TEAM: Team = {
  label: DENVER_BRONCOS_LABEL,
  link: DENVER_BRONCOS_PATHNAME,
  logo: broncosLogo,
  conference: AFC_CONFERENCE,
  division: WEST_DIVISION,
  uniform: broncosUniform,
  wordmark: broncosWordmark
}

export const DETROIT_LIONS_TEAM: Team = {
  label: DETROIT_LIONS_LABEL,
  link: DETROIT_LIONS_PATHNAME,
  logo: lionsLogo,
  conference: NFC_CONFERENCE,
  division: NORTH_DIVISION,
  uniform: lionsUniform,
  wordmark: lionsWordmark
}

export const GREEN_BAY_PACKERS_TEAM: Team = {
  label: GREEN_BAY_PACKERS_LABEL,
  link: GREEN_BAY_PACKERS_PATHNAME,
  logo: packersLogo,
  conference: NFC_CONFERENCE,
  division: NORTH_DIVISION,
  uniform: packersUniform,
  wordmark: packersWordmark
}

export const HOUSTON_TEXANS_TEAM: Team = {
  label: HOUSTON_TEXANS_LABEL,
  link: HOUSTON_TEXANS_PATHNAME,
  logo: texansLogo,
  conference: AFC_CONFERENCE,
  division: SOUTH_DIVISION,
  uniform: texansUniform,
  wordmark: texansWordmark
}

export const INDIANAPOLIS_COLTS_TEAM: Team = {
  label: INDIANAPOLIS_COLTS_LABEL,
  link: INDIANAPOLIS_COLTS_PATHNAME,
  logo: coltsLogo,
  conference: AFC_CONFERENCE,
  division: SOUTH_DIVISION,
  uniform: coltsUniform,
  wordmark: coltsWordmark
}

export const JACKSONVILLE_JAGUARS_TEAM: Team = {
  label: JACKSONVILLE_JAGUARS_LABEL,
  link: JACKSONVILLE_JAGUARS_PATHNAME,
  logo: jaguarsLogo,
  conference: AFC_CONFERENCE,
  division: SOUTH_DIVISION,
  uniform: jaguarsUniform,
  wordmark: jaguarsWordmark
}

export const KANSAS_CITY_CHIEFS_TEAM: Team = {
  label: KANSAS_CITY_CHIEFS_LABEL,
  link: KANSAS_CITY_CHIEFS_PATHNAME,
  logo: chiefsLogo,
  conference: AFC_CONFERENCE,
  division: WEST_DIVISION,
  uniform: chiefsUniform,
  wordmark: chiefsWordmark
}

export const LAS_VEGAS_RAIDERS_TEAM: Team = {
  label: LAS_VEGAS_RAIDERS_LABEL,
  link: LAS_VEGAS_RAIDERS_PATHNAME,
  logo: raidersLogo,
  conference: AFC_CONFERENCE,
  division: WEST_DIVISION,
  uniform: raidersUniform,
  wordmark: raidersWordmark
}

export const LOS_ANGELES_CHARGERS_TEAM: Team = {
  label: LOS_ANGELES_CHARGERS_LABEL,
  link: LOS_ANGELES_CHARGERS_PATHNAME,
  logo: chargersLogo,
  conference: AFC_CONFERENCE,
  division: WEST_DIVISION,
  uniform: chargersUniform,
  wordmark: chargersWordmark
}

export const LOS_ANGELES_RAMS_TEAM: Team = {
  label: LOS_ANGELES_RAMS_LABEL,
  link: LOS_ANGELES_RAMS_PATHNAME,
  logo: ramsLogo,
  conference: NFC_CONFERENCE,
  division: WEST_DIVISION,
  uniform: ramsUniform,
  wordmark: ramsWordmark
}

export const MIAMI_DOLPHINS_TEAM: Team = {
  label: MIAMI_DOLPHINS_LABEL,
  link: MIAMI_DOLPHINS_PATHNAME,
  logo: dolphinsLogo,
  conference: AFC_CONFERENCE,
  division: EAST_DIVISION,
  uniform: dolphinsUniform,
  wordmark: dolphinsWordmark
}

export const MINNESOTA_VIKINGS_TEAM: Team = {
  label: MINNESOTA_VIKINGS_LABEL,
  link: MINNESOTA_VIKINGS_PATHNAME,
  logo: vikingsLogo,
  conference: NFC_CONFERENCE,
  division: NORTH_DIVISION,
  uniform: vikingsUniform,
  wordmark: vikingsWordmark
}

export const NEW_ENGLAND_PATRIOTS_TEAM: Team = {
  label: NEW_ENGLAND_PATRIOTS_LABEL,
  link: NEW_ENGLAND_PATRIOTS_PATHNAME,
  logo: patriotsLogo,
  conference: AFC_CONFERENCE,
  division: EAST_DIVISION,
  uniform: patriotsUniform,
  wordmark: patriotsWordmark
}

export const NEW_ORLEANS_SAINTS_TEAM: Team = {
  label: NEW_ORLEANS_SAINTS_LABEL,
  link: NEW_ORLEANS_SAINTS_PATHNAME,
  logo: saintsLogo,
  conference: NFC_CONFERENCE,
  division: SOUTH_DIVISION,
  uniform: saintsUniform,
  wordmark: saintsWordmark
}

export const NEW_YORK_GIANTS_TEAM: Team = {
  label: NEW_YORK_GIANTS_LABEL,
  link: NEW_YORK_GIANTS_PATHNAME,
  logo: giantsLogo,
  conference: NFC_CONFERENCE,
  division: EAST_DIVISION,
  uniform: giantsUniform,
  wordmark: giantsWordmark
}

export const NEW_YORK_JETS_TEAM: Team = {
  label: NEW_YORK_JETS_LABEL,
  link: NEW_YORK_JETS_PATHNAME,
  logo: jetsLogo,
  conference: AFC_CONFERENCE,
  division: EAST_DIVISION,
  uniform: jetsUniform,
  wordmark: jetsWordmark
}

export const PHILADELPHIA_EAGLES_TEAM: Team = {
  label: PHILADELPHIA_EAGLES_LABEL,
  link: PHILADELPHIA_EAGLES_PATHNAME,
  logo: eaglesLogo,
  conference: NFC_CONFERENCE,
  division: EAST_DIVISION,
  uniform: eaglesUniform,
  wordmark: eaglesWordmark
}

export const PITTSBURGH_STEELERS_TEAM: Team = {
  label: PITTSBURGH_STEELERS_LABEL,
  link: PITTSBURGH_STEELERS_PATHNAME,
  logo: steelersLogo,
  conference: AFC_CONFERENCE,
  division: NORTH_DIVISION,
  uniform: steelersUniform,
  wordmark: steelersWordmark
}

export const SAN_FRANCISCO_49ERS_TEAM: Team = {
  label: SAN_FRANCISCO_49ERS_LABEL,
  link: SAN_FRANCISCO_49ERS_PATHNAME,
  logo: ersLogo,
  conference: NFC_CONFERENCE,
  division: WEST_DIVISION,
  uniform: ersUniform,
  wordmark: ersWordmark
}

export const SEATTLE_SEAHAWKS_TEAM: Team = {
  label: SEATTLE_SEAHAWKS_LABEL,
  link: SEATTLE_SEAHAWKS_PATHNAME,
  logo: seahawksLogo,
  conference: NFC_CONFERENCE,
  division: WEST_DIVISION,
  uniform: seahawksUniform,
  wordmark: seahawksWordmark
}

export const TAMPA_BAY_BUCCANEERS_TEAM: Team = {
  label: TAMPA_BAY_BUCCANEERS_LABEL,
  link: TAMPA_BAY_BUCCANEERS_PATHNAME,
  logo: buccaneersLogo,
  conference: NFC_CONFERENCE,
  division: SOUTH_DIVISION,
  uniform: buccaneersUniform,
  wordmark: buccaneersWordmark
}

export const TENNESSEE_TITANS_TEAM: Team = {
  label: TENNESSEE_TITANS_LABEL,
  link: TENNESSEE_TITANS_PATHNAME,
  logo: titansLogo,
  conference: AFC_CONFERENCE,
  division: SOUTH_DIVISION,
  uniform: titansUniform,
  wordmark: titansWordmark
}

export const WASHINGTON_COMMANDERS_TEAM: Team = {
  label: WASHINGTON_COMMANDERS_LABEL,
  link: WASHINGTON_COMMANDERS_PATHNAME,
  logo: commandersLogo,
  conference: NFC_CONFERENCE,
  division: EAST_DIVISION,
  uniform: commandersUniform,
  wordmark: commandersWordmark
}

export const TEAMS: Team[] = [
  ARIZONA_CARDINALS_TEAM,
  ATLANTA_FALCONS_TEAM,
  BALTIMORE_RAVENS_TEAM,
  BUFFALO_BILLS_TEAM,
  CAROLINA_PANTHERS_TEAM,
  CHICAGO_BEARS_TEAM,
  CINCINNATI_BENGALS_TEAM,
  CLEVELAND_BROWNS_TEAM,
  DALLAS_COWBOYS_TEAM,
  DENVER_BRONCOS_TEAM,
  DETROIT_LIONS_TEAM,
  GREEN_BAY_PACKERS_TEAM,
  HOUSTON_TEXANS_TEAM,
  INDIANAPOLIS_COLTS_TEAM,
  JACKSONVILLE_JAGUARS_TEAM,
  KANSAS_CITY_CHIEFS_TEAM,
  LAS_VEGAS_RAIDERS_TEAM,
  LOS_ANGELES_CHARGERS_TEAM,
  LOS_ANGELES_RAMS_TEAM,
  MIAMI_DOLPHINS_TEAM,
  MINNESOTA_VIKINGS_TEAM,
  NEW_ENGLAND_PATRIOTS_TEAM,
  NEW_ORLEANS_SAINTS_TEAM,
  NEW_YORK_GIANTS_TEAM,
  NEW_YORK_JETS_TEAM,
  PHILADELPHIA_EAGLES_TEAM,
  PITTSBURGH_STEELERS_TEAM,
  SAN_FRANCISCO_49ERS_TEAM,
  SEATTLE_SEAHAWKS_TEAM,
  TAMPA_BAY_BUCCANEERS_TEAM,
  TENNESSEE_TITANS_TEAM,
  WASHINGTON_COMMANDERS_TEAM
]
