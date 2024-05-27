import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { changePosition, fillSubMenu, toggleSubMenu } from '../store/slices/subMenuSlice.ts'
import { SubMenuItems } from '../types/submenuTypes.ts'

const useMouseHandler = () => {
  const dispatch = useDispatch()

  const handleMouseEnter = useCallback(
    (menuItems: SubMenuItems, updatePosition = true) => (event: React.MouseEvent<HTMLElement>) => {
      if (updatePosition) {
        const { offsetLeft, offsetTop } = event.currentTarget
        dispatch(changePosition({
          x: offsetLeft,
          y: offsetTop + 35,
        }))
      }
      dispatch(fillSubMenu(menuItems))
      dispatch(toggleSubMenu(true))
    },
    [dispatch]
  )

  const handleMouseLeave = useCallback(() => {
    dispatch(toggleSubMenu(false))
  }, [dispatch])

  return {
    handleMouseEnter,
    handleMouseLeave,
  }
}

export default useMouseHandler
