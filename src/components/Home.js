import React from "react";
import Note from "./Note.js"

const Home = (props) => {
  const showAlert = props.showAlert
  return(
    <>
      <Note showAlert={showAlert} />
    </>
  )
}

export default Home;