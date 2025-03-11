import React, {useState} from "react"
import NoteContext from "./NoteContext.js"

const NoteState = (props) => {
  const {
    showAlert
  } = props
  const host = "https://zany-goggles-inotebook-backend.onrender.com"
  const [notes, setNotes] = useState([]);
  const [user, setUser] = useState( {
      "name": "",
      "email": ""
    })

  //Get all notes
  const getNotes = async() => {
    try {
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem("token")
        }
      })
      const json = await response.json()
      setNotes(json)
      console.log(notes)
    } catch (err) {
      showAlert("Failed to get data!\nPlease refresh the page.", "danger")
    }
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
    await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem("token")
      }
    })
    //const json = await response.json()
    const newNotes = notes.filter((note) => note._id !== id)
    setNotes(newNotes)
  }

  //update Note
  const updateNote = async (id, title, description, tag) => {
    await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem("token")
      },
      body: JSON.stringify({
        title, description, tag
      })
    })

   // const json = await response.json()

    let newNotes = JSON.parse(JSON.stringify(notes))

    for (let i = 0; i < newNotes.length; i++) {
      let element = newNotes[i]
      if (element._id === id) {
        newNotes[i].title = title
        newNotes[i].description = description
        newNotes[i].tag = tag
        break;
      }
    }
    setNotes(newNotes)
  }

  // Get User info name and email
  const getUser = async() => {
    try {
      const response = await fetch(`${host}/api/auth/getuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token")
        }
      })

      const json = await response.json()
      setUser(json)
    } catch (err) {
      alert("cannot get user")
    }
  }


  return(
    <NoteContext.Provider value={ { notes, setNotes, getNotes, addNote, deleteNote, updateNote, user, getUser }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;