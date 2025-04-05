import React from "react"
import "../App.css"

const Spinner = () => {

  return(
      <svg className="spinner-svg" style={{
        scale: 0.5,
      }}>
        <circle cx="30" cy="30" r="30"></circle>
      </svg>
    
  )
}

export default Spinner