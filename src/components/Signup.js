import React, {
  useState
} from "react"
import {
  useNavigate
} from "react-router-dom";

const Signup = (props) => {
const showAlert=props.showAlert
  const [credentials,
    setCredentials] = useState( {
      name: "",
      email: "",
      password: "",
      cpassword: ""
    })
  const navigate = useNavigate()

  const onChange = (e) => {
    setCredentials({
      ...credentials, [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const {
      name,
      email,
      password,
      cpassword
    } = credentials;
    if (password !== cpassword) {
      alert("Passwords do not match!");
      return;
    }
    const response = await fetch(`https://zany-goggles-inotebook-backend.onrender.com/api/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name, email, password
      })
    })
    const json = await response.json()
    console.log(json.success)
    if (json.success) {
      localStorage.setItem("token", json.authtoken)
      navigate("/")
      showAlert("Account Created Successfully", "success")
    }else {
      showAlert("Invalid Details", "danger")
    }

  }

  return(
    <div className="container my-3">
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" onChange={onChange}
          value={credentials.name} required
          />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={onChange}
        value={credentials.email} required
        />
      <div id="emailHelp" className="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label">Password</label>
      <input type="password" className="form-control" id="password" name="password" value={credentials.password}onChange={onChange} minlength="5" required/>
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">Confirm password</label>
    <input type="password" className="form-control" id="cpassword" name="cpassword" aria-describedby="emailHelp" onChange={onChange}
    value={credentials.cpassword} minlength="5" required
    />
</div>

<button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>

)
}

export default Signup;