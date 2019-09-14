import React from 'react'
import useColor from '../hooks/useColor'

const Toggle = () => {
  // deconstructing
  const [color, setColor] = useColor(false)

  const onOff = e => {
    // prevent browser from reloading/refreshing
    e.preventDefault()
    setColor(!color)
  }

  return (
    <div className='toggle-holder'>
      <div onClick={onOff} className='toggle'>
        Dark Mode
      </div>
    </div>
  )
}

export default Toggle
