import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  updateTheme: () => {},
  savedList: [],
  savedId: [],
  addToList: () => {},
  removeFromList: () => {},
})

export default ThemeContext
