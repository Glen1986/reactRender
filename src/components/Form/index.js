import TextField from '@mui/material/TextField';
export const Form =()=>{
  return(
    <>
     <form >
        <TextField id="standard-basic" label="Standard" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </form>    
    </>
    )
 }
