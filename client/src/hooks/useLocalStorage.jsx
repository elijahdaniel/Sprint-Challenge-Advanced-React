import { useState } from 'react'

const useLocalStorage = (key, initalValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    // grab item from local storage if it exists
    const item = localStorage.getItem(key)
    // if it doesn't exist, set state to initalValue
    return item ? JSON.parse(item) : initalValue
  })
  const setValue = value => {
    // set the item on localstorage
    localStorage.setItem(key, JSON.stringify(value))
    // return localStorage's value that was set
    setStoredValue(value)
  }
  return [storedValue, setValue]
}

export default useLocalStorage
