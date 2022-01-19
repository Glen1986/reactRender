import { Note } from "./Note";
import { useState } from "react";

export default function App(props) {
  const [notes, setNotes]= useState(props.notes)
  const [newNote, setNewNote]= useState('') 

  const handleEvent =(e)=>{
    setNewNote(e.target.value)
}
const handleClick = ()=> {

  const noteToAddToState = {
    id : notes.length + 1,
    content: newNote,
    date: new Date().toISOString(),
    important:Math.random(),
  }
setNotes([...notes, noteToAddToState])
  setNewNote('')
}
  return (
    <>
    <ol>
      {notes.map((note) => <Note  key={note.id} {...note}/> )}   
    </ol>
      <div>
        <input type="text" onChange={handleEvent} value={newNote}/>
        <button onClick={handleClick}>crear nota</button>
      </div>
    </>
  );
}

