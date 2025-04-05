import React, { useState } from "react"
import {AlertContext} from "./NoteContext.js"

const AlertProvider = ({children}) => {
  
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    
    const reference = setAlert({
      message: message,
      type: type
    })
    
    setTimeout(() => {
      setAlert(null)
    }, 2000);
    
    return () => {clearTimeout(reference)}
  }
  
  return(
    <AlertContext.Provider value={{
    showAlert,
    alert
    }}>
      {children}
    </AlertContext.Provider>
  )
}

export default AlertProvider;