import { Note } from "./Note";
import { useState, useEffect } from "react";

export default function App(props) {
  const [notes, setNotes]= useState([]);
  const [newNote, setNewNote]= useState(''); 

  useEffect(()=>{
 fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
      .then((json)=>{
        setNotes(json)
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
    body: newNote 
  }
setNotes([...notes, noteToAddToState])
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

