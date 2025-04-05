import React from "react"
import Navbar from "./components/Navbar.js"
import Home from "./components/Home.js"
import About from "./components/About.js"
import Alert from "./components/Alert.js"
import Login from "./components/Login.js"
import Signup from "./components/Signup.js"
import Loader from "./components/Loader.js"
import MyNotes from "./components/MyNotes.js"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from"react-router-dom";

function App() {
  
  
  

  return (
    <>
      <Router>
        <Loader />
        <Navbar />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/" element = {<Home />} />
            
            <Route path="/mynotes" element={<MyNotes />} />

            <Route path="/about" element={<About />} />

            <Route path="/login" element={<Login />} />

            <Route path="/signup" element={<Signup />} />

          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;