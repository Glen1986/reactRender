import { Note } from "./Note";
import { useState, useEffect } from "react";
import axios from 'axios'
import {getAllNotes} from "./services/notes/getAllNotes";
import {createNotes} from "./services/notes/createNotes";

export default function App(props) {
  const [notes, setNotes]= useState([]);
  const [newNote, setNewNote]= useState(''); 
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
 getAllNotes()
      .then(notes =>{
        setNotes(notes)
        setLoading(false)
      })
  },[])

  
  const handleEvent =(e)=>{
    setNewNote(e.target.value)
}
const handleSubmit = (e)=> {
  e.preventDefault();
    const noteToAddToState = {
    id : notes.length + 1,
    title: newNote,
    body: newNote, 
    userId:1
  }
  createNotes(noteToAddToState)
    .then(newNote =>{
      setNotes((prevNotes) => prevNotes.concat(newNote))
    })
//setNotes([...notes, noteToAddToState])
  setNewNote('')
}

  return (
    <>
      <h1>Notas</h1>
    <ol>
      {notes
     .map((note) => <Note  key={note.id} {...note}/> )}   
    </ol>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleEvent} value={newNote}/>
        <button>crear nota</button>
      </form>
    </>
  );
}

