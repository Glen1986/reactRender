import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function Form(props) {
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
  console.log(noteToAddToState)
setNotes(notes.concat(noteToAddToState))

}
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined"onChange={handleEvent} value={content}/>
      <TextField id="filled-basic" label="Filled" variant="filled"value={date} onChange={handleEvent} />
      <TextField id="standard-basic" label="Standard" variant="standard" value={important}onChange={handleEvent} />
      <button onClick={handleClick}></button>
    </Box>
  );
}
