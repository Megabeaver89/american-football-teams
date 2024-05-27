import Team from "../interfaces/Team"
import { SubMenuItem } from "../submenuTypes"

export function isTeam(item: SubMenuItem): item is Team {
  return (
    (item as Team).logo !== undefined &&
    (item as Team).conference !== undefined &&
    (item as Team).division !== undefined &&
    (item as Team).wordmark !== undefined &&
    (item as Team).uniform !== undefined
  )
}
