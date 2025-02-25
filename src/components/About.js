import React, {useContext} from "react"
import noteContext from "../context/notes/NoteContext.js"

const About = () => {
const context = useContext(noteContext)
  return(
    <>
      i am about {context.name} of class {context.std}
    </>
  )
}

export default About;