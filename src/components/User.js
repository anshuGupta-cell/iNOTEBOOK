import React, {
  useRef,
  useContext
} from "react"
import {
  useNavigate
} from "react-router-dom"
import "../App.css"
import noteContext from "../context/notes/NoteContext.js"

const User = () => {

  const context = useContext(noteContext)

  const {
    user,
    getUser
  } = context

  const userModalRef = useRef(null)
  const cancelModalRef = useRef(null)
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/login")
    cancelModalRef.current.click()
  }

  const handleUser = () => {
    userModalRef.current.click()
    getUser()
  }

  return(
    <div>

      <i onClick={handleUser} className="fa-solid fa-circle-user font-icon m-2"></i>

      <button ref={userModalRef} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#userModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="userModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <i className="fa-solid fa-circle-user font-icon m-2"></i>
              <h1 className="m-auto modal-title fs-5" id="exampleModalLabel">User Info</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body fs-6">
              <div>
                {user.name}
              </div>
              <div>
                {user.email}
              </div>
            </div>
            <div className="modal-footer">
              <button onClick={handleLogout} className="btn mx-0 btn-primary">
                <i className="fa-solid fa-right-from-bracket mr-1"></i>
                Log out
              </button>
              <button ref={cancelModalRef} type="button" className="btn btn-secondary d-none" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User;