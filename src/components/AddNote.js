import React, {
  useContext,
  useState
} from "react"
import {NoteContext, ThemeContext} from "../context/notes/NoteContext.js"
import Button from "./Button.js"

const AddNote = (props) => {
  const context = useContext(NoteContext)
  const themeContext = useContext(ThemeContext)
  
  const {
    addNote
  } = context
  const {
    theme
  } = themeContext

  const [note, setNote] = useState( {
      title: "", description: "", tag: ""
    })

  const handleAddNote = (e) => {
    e.preventDefault()
    addNote(note.title, note.description, note.tag);
    setNote({title: "", description: "", tag: ""})
    
  }
  const onChange = (e) => {
    setNote({
      ...note, [e.target.name]: e.target.value
    })
  }

  return (
    <div className={`container py-3 bg-${theme} my-3 br-1 focus-within`}>
      <h1 className="fs-3">Add a note</h1>
      <form onSubmit={handleAddNote}>
        <div className="mb-2">
          <input type="text" className={`form-control focus-visible ${theme}-primary`} id="title"
          name="title" value={note.title} onChange={onChange}
          minlength={5} required placeholder="Title"/>
      </div>
      <div className="mb-2">
        <textarea type="text" className={`form-control focus-visible ${theme}-primary`} id="description" name="description" value={note.description} onChange={onChange} minlength={5} required
        rows="10"
        placeholder="Note..."
        />
    </div>
    <div className="mb-3">
      <input type="text" className={`form-control focus-visible ${theme}-primary`} id="tag" name="tag" value={note.tag} onChange={onChange} 
      placeholder="Tag"
      maxLength={36}
      />
      {note.tag.length === 36 && <p className="max-length">max length of 36 is reached!!</p>}
  </div>

  <Button
    type="submit" className="btn btn-primary">Add Note
  </Button>
</form>
</div>
)
}

export default AddNote;