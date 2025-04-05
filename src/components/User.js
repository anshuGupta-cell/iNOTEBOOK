import React, { useRef, useContext} from "react"
import { useNavigate} from "react-router-dom"
import "../App.css"
import {NoteContext, ThemeContext} from "../context/notes/NoteContext.js"
import Button from "./Button.js"
import ThemeToggle from "./ThemeToggle.js"

const User = () => {

  const context = useContext(NoteContext)
  const themeContext = useContext(ThemeContext)

  const {
    user,
    getUser
  } = context
  const {
    theme
  } = themeContext

  const userModalRef = useRef(null)
  const cancelModalRef = useRef(null)
  const navigate = useNavigate()

  const handleLogout = async() => {
    localStorage.removeItem("token")
    await cancelModalRef.current.click()
    navigate("/login")
  }

  const handleUser = async() => {
    userModalRef.current.click()
    const success = await getUser()
    console.log("user.success 2 --> ", success)
    if (success === false){
      handleLogout()
    }
  }
  

  return(
    <div>

      <i onClick={handleUser} className="fa-solid fa-circle-user font-icon m-2"></i>

      <button ref={userModalRef} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#userModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="userModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className={`modal-content bg-${theme}`}>
            <div className="modal-header user-modal-header b-d-1">
              <p className=" modal-title fs-5" id="exampleModalLabel">Profile</p>
              <i data-bs-dismiss="modal" aria-label="Close"
              class="fa-solid fs-4 fa-xmark"></i>
            </div>
            <div className="modal-body fs-6">
              <div className="dp">
                <ul className="dp-img"></ul>
              </div>
              <div>Name: {user.success? user.user.name : ""}</div>
              <div>Email: {user.success? user.user.email : ""}</div>
              <ThemeToggle/>
            </div>
            <div className="modal-footer b-u-1">
              <span onClick={handleLogout} >
                <Button>
                <i className="fa-solid fa-right-from-bracket mr-1"></i>
                Log out
                </Button>
              </span>
              <button ref={cancelModalRef} type="button" className="btn btn-secondary d-none" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User;