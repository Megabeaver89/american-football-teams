import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { changePosition, fillSubMenu, toggleSubMenu } from '../store/slices/subMenuSlice.ts'
import { MenuItem } from '../interfaces/subMenu'

const useMouseHandler = () => {
  const dispatch = useDispatch()

  const handleMouseEnter = useCallback(
    (menuItems: MenuItem[], updatePosition = true) => (event: React.MouseEvent<HTMLElement>) => {
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
