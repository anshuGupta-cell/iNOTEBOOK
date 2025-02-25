import React from "react"
import {
  Link,
  useLocation,
  useNavigate
} from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }
  return(

    <nav className="navbar bg-body-tertiary">
      <span className="navbar-brand">iNOTEBOOK</span>
      <div className="d-flex justify-content-between w-100" style={ { fontSize: "1rem" }}>
        <ul className="nav nav-underline">

          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === "/"? "active": " "}`} aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === "/about"? "active": " "}`} to="/about">About</Link>
          </li>
        </ul>
        <ul className="nav nav-pills" style={ { fontSize: "0.8rem" }}>
          {(!localStorage.getItem("token"))?<>
          <li className="nav-item mx-1">
            <Link className="btn btn-primary" to="/login" role="button">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="btn btn-primary" to="/signup" role="button">Signup</Link>
          </li>
          </>:<button onClick = {handleLogout} className="btn btn-primary">Logout</button>
          }
        </ul>
      </div>
    </nav>

  )
}

export default Navbar;