import { Note } from "./Note";
import { useState, useEffect } from "react";
import axios from 'axios'
import {getAllNotes} from "./services/notes/getAllNotes";

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
  axios.post('https://jsonplaceholder.typicode.com/posts', noteToAddToState)
    .then(res => {
      const {data} =  res
      setNotes(prevNotes => prevNotes.concat(data))
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

