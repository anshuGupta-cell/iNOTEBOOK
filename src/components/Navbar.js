import React, {useContext}from "react"
import {
  Link,
  useLocation,
} from "react-router-dom"
import User from "./User.js"
import Button from "./Button.js"
import "../App.css"
import {ThemeContext} from "../context/notes/NoteContext.js"

const Navbar = () => {
  
  const location = useLocation()
  const themeContext = useContext(ThemeContext)
  
  const {
    theme
  } = themeContext

  return(

    <nav className={`navbar bg-${theme}`}>
      <div className="d-flex justify-content-between w-100">
        <span className=" fs-3 f-bold align-center">iNOTEBOOK</span>
        <ul className="nav-box-login" style={ { fontSize: "0.8rem" }}>
          {(!localStorage.getItem("token"))?<>
            <li className="nav-item ">
              <Link className="bg-none" to="/login" >
                <Button scale = {0.9}>
                  Login
                </Button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="bg-none" to="/signup" role="button">
                <Button scale = {0.9}>
                  Signup
                </Button>
              </Link>
            </li>
          </>: <User />
          }
        </ul>
      </div>
      <div className="d-flex justify-content-between w-100" style={ { fontSize: "1rem" }}>
        <ul className="nav nav-underline">

          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === "/"? `${theme}-active`: " "}`} aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === "/mynotes"? `${theme}-active`: " "}`} aria-current="page" to="/mynotes">My Notes</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === "/about"? `${theme}-active`: " "}`} to="/about">About</Link>
          </li>
        </ul>

      </div>
    </nav>

  )
}

export default Navbar;