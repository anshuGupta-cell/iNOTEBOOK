import React, {
  useState,
  useContext
} from "react"
import {
  NoteContext,
  ProgressContext,
  AlertContext
} from "./NoteContext.js"

const NoteState = (props) => {
  const proContext = useContext(ProgressContext)
  const alertContext = useContext(AlertContext)
  const {
    showProg
  } = proContext
  const {
    showAlert
  } = alertContext

  const [spinning,
    setSpinning] = useState(false)

  const host = "https://zany-goggles-inotebook-backend.onrender.com"
  const [notes,
    setNotes] = useState([]);
  const [user,
    setUser] = useState( {
      "name": "",
      "email": ""
    })

  //Get all notes
  const getNotes = async() => {
    showProg(10)
    setSpinning(true)
    try {
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem("token")
        }
      })
      showProg(50)
      const json = await response.json()
      showProg(75)
      setNotes(json)
    } catch (err) {
      showAlert("Failed to get data!\nPlease refresh the page.", "danger")
    }
    setSpinning(false)
    showProg(100)
  }

  //Add Note
  const addNote = async (title, description, tag) => {

    showProg(10)
    try {
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
      showProg(50)
      const note = await response.json()
      showProg(75)
      setNotes(notes.concat(note))
      showAlert("Note added successfully", "success")
    } catch (err) {
      showAlert("Failed to add note!", "danger")
    }
    showProg(100)
  }

  //delete Note
  const deleteNote = async (id) => {
    showProg(10)
    try {
      await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem("token")
        }
      })
      showProg(50)
      //const json = await response.json()
      const newNotes = notes.filter((note) => note._id !== id)
      showProg(75)
      setNotes(newNotes)
    } catch (err) {}
    showProg(100)
  }

  //update Note
  const updateNote = async (id, title, description, tag) => {
    showProg(10)
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
    showProg(50)

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
    showProg(75)
    setNotes(newNotes)
    showProg(100)
    showAlert("Successfully updated",
      "success")
  }

  // Get User info name and email
  const getUser = async() => {

    showProg(10)
    try {
      const response = await fetch(`${host}/api/auth/getuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token")
        }
      })
      showProg(50)
      const json = await response.json()
      showProg(75)
      setUser(json)
      showProg(100)
      return json.success
    } catch (err) {
      showAlert("Cannot get user", "danger")
    }
    showProg(100)
  }

  return(
    <NoteContext.Provider value={ { notes, setNotes, getNotes, addNote, deleteNote, updateNote, user, getUser, showProg, spinning } }>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;