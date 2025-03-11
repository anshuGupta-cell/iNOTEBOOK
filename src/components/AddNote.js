import React, {
  useContext,
  useState
} from "react"
import NoteContext from "../context/notes/NoteContext.js"

const AddNote = (props) => {
  const context = useContext(NoteContext)
  const {
    addNote
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
    <div className="container bg-light my-3">
      <h1>Add a note</h1>
      <form onSubmit={handleAddNote}>
        <div className="mb-2">
          <input type="text" className="form-control" id="title"
          name="title" value={note.title} onChange={onChange}
          minlength={5} required placeholder="Title"/>
      </div>
      <div className="mb-2">
        <textarea type="text" className="form-control {shadow-none}" id="description" name="description" value={note.description} onChange={onChange} minlength={5} required
        rows="8"
        placeholder="Note..."
        />
    </div>
    <div className="mb-3">
      <input type="text" className="form-control " id="tag" name="tag" value={note.tag} onChange={onChange} 
      placeholder="Tag"
      />
  </div>

  <button 
    type="submit" className="btn btn-primary">Add Note
  </button>
</form>
</div>
)
}

export default AddNote;