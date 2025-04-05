import React, {
  useContext,
  useRef
} from "react"
import {
  NoteContext,
  ThemeContext,
  AlertContext
} from "../context/notes/NoteContext.js"
import "../App.css"
import Button from "./Button.js"

const DeleteModal = (props) => {

  const themeContext = useContext(ThemeContext)
  const noteContext = useContext(NoteContext)
  const alertContext = useContext(AlertContext)
  const cancelRef = useRef(null)


  const {
    theme
  } = themeContext
  const {
    deleteNote
  } = noteContext
  const {
    showAlert
  } = alertContext
  const {
    title,
    id
  } = props
  
  
  const handleDelete = async() => {
    cancelRef.current.click()
    await deleteNote(id);
    showAlert("Note deleted successfully!", "success")
  }

  return (
    <div className="">
      
      <i className="fa-regular fa-trash-can mx-2 fs-6" data-bs-toggle="modal" data-bs-target={`#deleteModal${id}`}
      ></i>
      
      <div className="modal fade" id={`deleteModal${id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className={`modal-content bg-${theme} `}>
            <div className="modal-header user-modal-header b-d-1">
              <p className=" modal-title fs-5" id="exampleModalLabel">
                Delete
              </p>
              <i data-bs-dismiss="modal" aria-label="Close"
                class="fa-solid fs-4 fa-xmark"></i>
            </div>
            <div className="modal-body fs-6">
              <p>
                The following note will be deleted permanently.
              </p>
              <p>
                {title}
              </p>

            </div>
            <div className="modal-footer b-u-1">
              <button ref={cancelRef} type="button" className="btn btn-secondary d-none" data-bs-dismiss="modal">Cancel</button>
              <span onClick={handleDelete}>
                <Button>
                  Delete
                </Button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal