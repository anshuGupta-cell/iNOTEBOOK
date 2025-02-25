import React, {useContext} from "react"
import NoteContext from "../context/notes/NoteContext.js"

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
    <div class="card col-md-3 mx-3 my-2">
      <div class="card-body">
        <div className="d-flex justify-content-between">
          <h5 class="card-title">{note.title}</h5>
          <div>
            <i className="fa-regular fa-trash-can mx-2"
            onClick = {()=>{deleteNote(note._id); showAlert("Deleted successfully", "success")}}
            ></i>
            <i className="fa-regular fa-pen-to-square mx-1"
            onClick={()=>{editNote(note)}}
            ></i>
          </div>
        </div>

        <p class="card-text">
          {note.description} {note.tag}
        </p>
      </div>
    </div>
  )
}

export default NoteItem;