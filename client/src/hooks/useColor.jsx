import { useEffect } from 'react'
import useLocalStorage from './useLocalStorage'

const useColor = () => {
  // setting key to 'color, and value to false (turned off)
  const [color, setColor] = useLocalStorage('color', false)

  useEffect(() => {
    const body = window.document.body
    // if color is true add class, if false remove class
    color ? body.classList.add('color') : body.classList.remove('color')
  })

  return [color, setColor]
}

export default useColor
