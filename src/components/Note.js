import React, {
  useContext,
  useEffect,
  useRef,
  useState
} from "react";
import noteContext from "../context/notes/NoteContext.js"
import NoteItem from "./NoteItem.js"
import AddNote from "./AddNote.js"
import {
  useNavigate
} from "react-router-dom"
import "../App.css"

const Note = (props) => {
  const navigate = useNavigate()
  const context = useContext(noteContext)
  const {
    notes,
    getNotes,
    updateNote
  } = context;
  const {
    showAlert
  } = props

  const modalRef = useRef(null)
  const modalCloseRef = useRef(null)
  const [note,
    setNote] = useState( {
      id: "", etitle: "", edescription: "", etag: ""
    })

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      navigate("/login")
    }
    // eslint-disable-next-line
  },[]);

  const editNote = (currentNote) => {
    modalRef.current.click()
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag
    })
  }
  const handleClick = (e) => {
    modalCloseRef.current.click()
    updateNote(note.id,
      note.etitle,
      note.edescription,
      note.etag)
    props.showAlert("Successfully updated",
      "success")
    e.preventDefault()
  }
  const onChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value
    });
  };


  return(
    <div className="container">

      <AddNote showAlert={showAlert} />

      <div className="">
        <button ref={modalRef} type="button" className="btn d-none btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Launch demo modal
        </button>

        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-4" id="exampleModalLabel">Edit note</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">

                <form>
                  <div className="mb-3">
                    <input
                    value={note.etitle}
                    type="text" className="form-control" id="etitle"
                    name="etitle" onChange={onChange}
                    minlength="5"
                    placeholder="Title"
                    required />
                </div>
                <div className="mb-3">
                  <textarea
                    value={note.edescription}
                    type="text" className="form-control" id="edescription" name="edescription" onChange={onChange} minlength="5"
                    placeholder="Note"
                    rows="8"
                    required />
                </div>
                <div className="mb-3">
                  <input
                  value={note.etag}
                  type="text" className="form-control" id="etag" name="etag" onChange={onChange}
                  placeholder="Tag"
                  />
              </div>
            </form>

          </div>
          <div className="modal-footer">
            <button ref={modalCloseRef} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button disabled={note.etitle < 5 || note.edescription < 5} onClick={handleClick}
              type="submit" className="btn btn-primary">Update note
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="container bg-light m-0 p-0">
    <h1>Your Notes</h1>
    <div className="grid-box">
      {notes.length === 0?"No notes to display": 
      notes.map((note, index) => {
        return <NoteItem key={note._id} editNote={editNote} note={note} showAlert={props.showAlert} />
      })}
    </div>
  </div>
</div>
)
}

export default Note;