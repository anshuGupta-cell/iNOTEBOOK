import React, {useState} from "react"
import { ThemeContext } from "./NoteContext.js"

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

if(theme === "dark"){
  document.body.style.background = '#151515'
}else {
  document.body.style.background = '#e5e5e5'
}

const handleTheme = () => {
  const newTheme = theme === "dark" ? "light" : "dark";
  setTheme(newTheme);
  localStorage.setItem("theme", newTheme);
  
};

  
  
  return(
    <ThemeContext.Provider value={{theme, setTheme, handleTheme}}>
      {props.children}
    </ThemeContext.Provider>
      
  )
}

export default ThemeProvider