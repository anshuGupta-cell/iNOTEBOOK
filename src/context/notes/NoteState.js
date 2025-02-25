import React, {
  useState
} from "react"
import NoteContext from "./NoteContext.js"

const NoteState = (props) => {
  const host = "https://zany-goggles-inotebook-backend.onrender.com"
  const noteInitial = [{
    "_id": "1",
    "title": "My title",
    "description": "my description",
    "tag": "my tag",
    "date": "1-1-2025"
  },
    {
      "_id": "2",
      "title": "rukia's title",
      "description": "rukia's description",
      "tag": "rukia's tag",
      "date": "2-2-2025"
    }]

  const [notes,
    setNotes] = useState(noteInitial);
  //Get all notes
  const getNotes = async() => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem("token")
      }
    })
    const json = await response.json()
    console.log(json, "<--my json")
    setNotes(json)
    
  }

  //Add Note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem("token")
      },
      body: JSON.stringify({
        title, description, tag
      })
    })
    const note = await response.json()
    setNotes(notes.concat(note))
  }

  //delete Note
  const deleteNote = async (id) => {
    console.log("deleting note", id)
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem("token")
      }
    })
    const json = await response.json()
    const newNotes = notes.filter((note) => note._id !== id)
    setNotes(newNotes)
  }

  //update Note
  const updateNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem("token")
      },
      body: JSON.stringify({ title, description, tag })
    })
    
    const json = await response.json()
    
    let newNotes = JSON.parse(JSON.stringify(notes))
    
    for(let i = 0; i < newNotes.length; i++){
      let element = newNotes[i]
      if(element._id == id){
        newNotes[i].title = title
        newNotes[i].description = description
        newNotes[i].tag = tag
        break;
      }
    }
    setNotes(newNotes)
  }


  return(
    <NoteContext.Provider value={ { notes, setNotes, getNotes, addNote, deleteNote, updateNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;