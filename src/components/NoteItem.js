import React, {
  useContext
} from "react"
import {
  ThemeContext
} from "../context/notes/NoteContext.js"
import "../App.css"
import DeleteModal from "./DeleteModal.js"

const NoteItem = (props) => {
  const themeContext = useContext(ThemeContext)
  

  const {
    note,
    editNote
  } = props;

  const {
    theme
  } = themeContext

  return(
    <div class={`card ${theme}-primary`}>

      <span class="badge tag rounded-pill p-2 mx-2 text-bg-dark b-1">{note.tag}</span>
      <div class="card-body ">
        <div className="d-flex justify-content-between b-d-1">
          <h4 class="card-title mb-2">{note.title}</h4>
          <div className="no-wrap ">

            <DeleteModal title={note.title}
              id={note._id} />

            <i className="fa-regular fa-pen-to-square mx-1"
              onClick={()=> { editNote(note)}}
              ></i>
          </div>
        </div>

        <div class="card-text"
          style={ { whiteSpace: "pre-wrap",
            fontSize: "0.9rem",
            margin: "8px 0 0 0"
          }}
          >
          {note.description}
        </div>
      </div>
    </div>
  )
}

export default NoteItem;