import {
  useState,
  useEffect
} from "react"
import Navbar from "./components/Navbar.js"
import Home from "./components/Home.js"
import About from "./components/About.js"
import NoteState from "./context/notes/NoteState.js"
import Alert from "./components/Alert.js"
import Login from "./components/Login.js"
import Signup from "./components/Signup.js"


import {
  BrowserRouter as Router,
  Routes,
  Route
} from"react-router-dom";

function App() {

  const [alert,
    setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })

    console.log("alert", alert)
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home showAlert={showAlert} />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login showAlert={showAlert} />} />
              <Route path="/signup" element={<Signup showAlert={showAlert} />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  )
}

export default App;