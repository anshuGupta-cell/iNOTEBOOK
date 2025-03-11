import React, {useContext} from "react"
import NoteContext from "../context/notes/NoteContext.js"
import "../App.css"

const NoteItem = (props) => {
  const context = useContext(NoteContext);
  const {
    deleteNote
  } = context;
  const {
    note,
    editNote,
    showAlert
  } = props;
  return(
    <div class="card">
      <div class="card-body">
        <div className="d-flex justify-content-between ">
          <h4 class="card-title">{note.title}</h4>
          <div className="no-wrap ">
            <span class="badge rounded-pill p-2 mx-2 text-bg-dark">{note.tag}</span>
            <i className="fa-regular fa-trash-can mx-2"
            onClick = {()=>{deleteNote(note._id); showAlert("Deleted successfully", "success")}}
            ></i>
            <i className="fa-regular fa-pen-to-square mx-1"
            onClick={()=>{editNote(note)}}
            ></i>
          </div>
        </div>

        <div class="card-text"
        style={{whiteSpace: "pre-wrap"}}
        >
          {note.description}
        </div>
      </div>
    </div>
  )
}

export default NoteItem;