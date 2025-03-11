import React from "react"
import {
  Link,
  useLocation,
} from "react-router-dom"
import User from "./User.js"

const Navbar = () => {
  
  const location = useLocation()
  
  return(

    <nav className="navbar bg-body-tertiary">
      <div className="d-flex justify-content-between w-100">
      <span className="navbar-brand">iNOTEBOOK</span>
       <ul className="nav nav-pills" style={ { fontSize: "0.8rem" }}>
          {(!localStorage.getItem("token"))?<>
          <li className="nav-item mx-1">
            <Link className="btn btn-primary" to="/login" role="button">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="btn btn-primary" to="/signup" role="button">Signup</Link>
          </li>
          </>:<User/>
          }
        </ul>
      </div>
      <div className="d-flex justify-content-between w-100" style={ { fontSize: "1rem" }}>
        <ul className="nav nav-underline">

          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === "/"? "active": " "}`} aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === "/about"? "active": " "}`} to="/about">About</Link>
          </li>
        </ul>
       
      </div>
    </nav>

  )
}

export default Navbar;