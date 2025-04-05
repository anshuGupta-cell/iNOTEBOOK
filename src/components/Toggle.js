import React from "react"


const Toggle = (props) => {

  const {
    theme,
    handleTheme
  } = props

  return(
    <ul onClick = {handleTheme} className={`toggleBody ${theme}`}>
      <div className="circle">
        <div className="circle2"></div>
      </div>
    </ul>
  )
}
export default Toggle