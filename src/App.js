import { Note } from "./Note";
import { useState } from "react";

export default function App(props) {
  const [notes, setNotes]= useState(props.notes)
  const [newNote, setNewNote]= useState('') 
  const [showAll, setShowAll] = useState(true)

  const handleEvent =(e)=>{
    setNewNote(e.target.value)
}
const handleSubmit = (e)=> {
  e.preventDefault();

  const noteToAddToState = {
    id : notes.length + 1,
    content: newNote,
    date: new Date().toISOString(),
    important:Math.random(),
  }
setNotes([...notes, noteToAddToState])
  setNewNote('')
}
const handleShowAll = () =>{
  setShowAll(()=> !showAll)
}
  return (
    <>
      <h1>Notas</h1>
      <button onClick={handleShowAll}>{showAll ? 'todos' : 'solo importantes'}</button>
    <ol>
      {notes
          .filter(note =>{
            if(showAll === true) return note
            return note.important === true
      })
      .map((note) => <Note  key={note.id} {...note}/> )}   
    </ol>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleEvent} value={newNote}/>
        <button >crear nota</button>
      </form>
    </>
  );
}

