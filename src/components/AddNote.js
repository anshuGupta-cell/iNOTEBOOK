import React, {
  useContext,
  useState
} from "react"
import NoteContext from "../context/notes/NoteContext.js"

const AddNote = (props) => {
  const context = useContext(NoteContext)
  const {
    addNote,
    deleteNote,
    updateNote
  } = context

  const [note, setNote] = useState( {
      title: "", description: "", tag: ""
    })

  const handleAddNote = (e) => {
    e.preventDefault()
    addNote(note.title, note.description, note.tag);
    setNote({title: "", description: "", tag: ""})
    props.showAlert("Note added successfully", "success")
  }
  const onChange = (e) => {
    setNote({
      ...note, [e.target.name]: e.target.value
    })
  }

  return (
    <div className="container my-3">
      <h1>Add a note</h1>
      <form onSubmit={handleAddNote}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title
          </label>
          <input type="text" className="form-control" id="title"
          name="title" value={note.title} onChange={onChange}
          minlength={5} required/>
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description
        </label>
        <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} minlength={5} required/>
    </div>
    <div className="mb-3">
      <label htmlFor="tag" className="form-label">Tag
      </label>
      <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} />
  </div>

  <button 
    type="submit" className="btn btn-primary">Add note
  </button>
</form>
</div>
)
}

export default AddNote;