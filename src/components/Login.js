import React, {
  useState
} from "react"
import {
  useNavigate
} from "react-router-dom";

const Login = (props) => {
  const showAlert = props.showAlert
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
    const json = await response.json()
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

  }


  return(
    <div className="container my-3">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={onChange}
          value={credentials.email}
          />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" name="password" value={credentials.password}onChange={onChange} />
    </div>

    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
</div>
)
}

export default Login;