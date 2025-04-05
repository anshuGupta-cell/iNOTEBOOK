import React, { useState } from "react"
import {ProgressContext} from "./NoteContext.js"

const ProgressProvider = (props) => {
  const [progress, setProgress] = useState(10)

  const showProg = (prog) => {

    setProgress(prog)
    let timeOut
    if (prog === 100) {
      timeOut = setTimeout(() => {
        setProgress(null)
      }, 200);
    }

    return () => clearTimeout(timeOut)
  }
  
  return(
    <ProgressContext.Provider value={ { progress, showProg} }>
      {props.children}
    </ProgressContext.Provider>
  )
}

export default ProgressProvider;
