import React, {useContext} from "react"
import Toggle from "./Toggle.js"
import {ThemeContext} from "../context/notes/NoteContext.js"

const ThemeToggle = () => {
  
  const themeContext = useContext(ThemeContext)
  
  const {
    theme,
    setTheme,
    handleTheme
  } = themeContext
  
  return(
    <div className="theme-cont">
        Dark Theme
      <Toggle theme = {theme} setTheme={setTheme} handleTheme={handleTheme}/>
    </div>
  )
}

export default ThemeToggle