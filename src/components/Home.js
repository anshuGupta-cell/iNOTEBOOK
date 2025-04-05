import React, {
  useEffect,
  useContext
} from "react";
import Note from "./Note.js"
import {
  useNavigate
} from "react-router-dom"
import {
  NoteContext
} from "../context/notes/NoteContext.js"

const Home = (props) => {
  const navigate = useNavigate()
  const context = useContext(NoteContext)
  
  const {
    getUser
  } = context;
  
  const fetchUser = async () => {
    if (localStorage.getItem("token")) {
      const success = await getUser()
      console.log("returned success --> ", success)
      if (success === false) {
        localStorage.removeItem("token")
        navigate("/login")
      }
    } else {
      navigate("/login")
    }
  }
  
  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line
  }, []);

  
  return(
    <>
      <Note/>
    </>
  )
}

export default Home;