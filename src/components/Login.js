import React, {
  useState,
  useContext
} from "react"
import {
  useNavigate
} from "react-router-dom";
import {
  ProgressContext,
  AlertContext,
  ThemeContext
} from "../context/notes/NoteContext.js"
import "../App.css"
import Button from "./Button.js"

const Login = (props) => {
  const proContext = useContext(ProgressContext)
  const alertContext = useContext(AlertContext)
  const themeContext = useContext(ThemeContext)
  
  const [passStat, setPassStat] = useState(true)
  const {
    showProg
  } = proContext

  const {
    showAlert
  } = alertContext
  const {
    theme
  } = themeContext

  const [credentials,
    setCredentials] = useState( {
      email: "", password: ""
    })
  const navigate = useNavigate()

  const onChange = (e) => {
    setCredentials({
      ...credentials, [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    showProg(10)
    try {
      const response = await fetch(`https://zany-goggles-inotebook-backend.onrender.com/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: credentials.email, password: credentials.password
        })
      })
      showProg(50)
      const json = await response.json()
      showProg(75)
      if (json.success) {
        localStorage.setItem("token", json.authtoken)
        navigate("/")
        showAlert("Logged in Successfully", "success")
      } else {
        showAlert("Wrong email or password", "danger")
      }
    } catch (err) {
      showAlert("Failed to log in!\nPlease check your internet connection.", "danger")
    }

    showProg(100)
  }


  return(
    <div className={`container br-1 p-3 bg-${theme} my-3 focus-within`}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className={`form-control focus-visible ${theme}-primary`} id="email" name="email" aria-describedby="emailHelp" onChange={onChange}
          value={credentials.email}
          required
          />
        <div id="emailHelp" className={`form-text bg-${theme}`}>
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <div className="pass-Cont">
        <input type={passStat?"password": "text"} className={`form-control focus-visible ${theme}-primary`} id="password" name="password" value={credentials.password}onChange={onChange} required />
      <i
        onClick={() => { setPassStat(!passStat)}}
        className={`fa-solid  eye-icon fa-eye${passStat ? "-slash": ""}`}></i>
        </div>
    </div>

    <Button type="submit">
      Submit
    </Button>
  </form>
</div>
)
}

export default Login;