import React from "react"
import "../App.css"

const Button = (props) => {
  const {
    scale
  } = props

  const glassyButtons = document.querySelectorAll('.glassy-btn');

  glassyButtons.forEach((button) => {
    button.addEventListener('touchmove', (e) => {
      handleMove(e, button)
    })
  })

  glassyButtons.forEach((button) => {
    button.addEventListener('mousemove', (e) => {
      handleMove(e, button)
    })
  })

  const handleMove = (e, button) => {
    const centerX = button.offsetWidth / 2
    const centerY = button.offsetHeight / 2
    let offsetX
    let offsetY
    if (e.type === "touchmove") {
      const touch = e.touches[0]
      offsetX = touch.clientX - centerX
      offsetY = touch.clientY - centerY

    } else {
      offsetX = e.offsetX - centerX
      offsetY = e.offsetY - centerY
    }


    button.style.setProperty("--_x-motion", `${offsetX}px`)
    button.style.setProperty("--_y-motion", `${offsetY}px`)

  }


  return(
    <button className="glassy-btn btn-blue"
    style = {{
      scale: `${scale}`
    }}
    type="submit">
      <span>
        {props.children}
      </span>
    </button>
  )
}

export default Button