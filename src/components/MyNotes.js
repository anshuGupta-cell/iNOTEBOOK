import React, {
  useContext,
  useEffect,
  useRef,
  useState
} from "react";
import {
  NoteContext,
  ThemeContext
} from "../context/notes/NoteContext.js"
import NoteItem from "./NoteItem.js"
import {
  useNavigate
} from "react-router-dom"
import "../App.css"
import Spinner from "./Spinner.js"
import Button from "./Button.js"

const MyNotes = (props) => {
  const navigate = useNavigate()
  const context = useContext(NoteContext)
  const themeContext = useContext(ThemeContext)

  const {
    notes,
    getNotes,
    updateNote,
    spinning
  } = context;

  const {
    theme
  } = themeContext

  const modalRef = useRef(null)
  const modalCloseRef = useRef(null)
  const [note,
    setNote] = useState( {
      id: "", etitle: "", edescription: "", etag: ""
    })
    
  useEffect(()=>{
    if(localStorage.getItem("token")){
      getNotes()
    }else {
      navigate("/login")
    }
    // eslint-disable-next-line
  }, [])

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
    e.preventDefault()
  }
  const onChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value
    });
  };

  return(
    <div className={`container my-3 bg-${theme} br-1 p-1-5`}>

      <div className="">
        <button ref={modalRef} type="button" className="btn d-none btn-primary" data-bs-toggle="modal" data-bs-target="#editModal">
          Launch demo modal
        </button>

        {/* Modal to edit note */}
        <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className={`modal-content bg-${theme} focus-within`}>
              <div className="modal-header user-modal-header b-d-1">
                <h1 className="modal-title fs-4" id="exampleModalLabel">Edit note</h1>
              <i data-bs-dismiss="modal" aria-label="Close"
              class="fa-solid fs-4 fa-xmark"></i>
              </div>
              <div className="modal-body">

                <form>
                  <div className="mb-3">
                    <input
                    value={note.etitle}
                    type="text" className={`form-control focus-visible ${theme}-primary`} id="etitle"
                    name="etitle" onChange={onChange}
                    minlength="5"
                    placeholder="Title"
                    required />
                </div>
                <div className="mb-3">
                  <textarea
                    value={note.edescription}
                    type="text" className={`form-control focus-visible ${theme}-primary`} id="edescription" name="edescription" onChange={onChange} minlength="5"
                    placeholder="Note"
                    rows="8"
                    required />
                </div>
                <div className="mb-3">
                  <input
                  value={note.etag}
                  type="text" className={`form-control focus-visible ${theme}-primary`} id="etag" name="etag" onChange={onChange}
                  placeholder="Tag"
                  maxLength={36}
                  />
                {note.etag.length === 36 && <p className="max-length">
                  max length of 36 is reached!!
                </p>
                }
              </div>
            </form>

          </div>
          <div className="modal-footer b-u-1">
            <span ref={modalCloseRef} type="button" data-bs-dismiss="modal">
              <Button scale={0.9}>
                
              Cancel
              </Button>
              </span>
            <span disabled={note.etitle < 5 || note.edescription < 5} onClick={handleClick}
              type="submit" >
              <Button scale={0.9}>
              Update note
              </Button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

    <h1 className="fs-3">My Notes</h1>
    <div className="grid-box padding-bottom-3">
      {notes.length === 0?"": ""}
      {Array.isArray(notes)?
      notes.map((note, index) => {
        return <NoteItem key={note._id} editNote={editNote} note={note}  />
      }): notes.error
      }
      {spinning && <Spinner/>}
  </div>
</div>
)
}

export default MyNotes;