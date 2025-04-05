import React, {useContext} from "react"
import "../App.css"
import {ProgressContext} from "../context/notes/NoteContext.js"

const Loader = () => {
  
  const proContext = useContext(ProgressContext)
  
  const {
    progress
  } = proContext
  
  if(!progress){
    return null
  } 
    
  return(
    <div className="loader-cont">
      <div className="loader-bar"></div>
      <div className="loader-prog" 
      style = {{
        width: `${progress}%`
      }}
      ></div>
    </div>
  )
}

export default Loader
