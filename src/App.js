import { Note } from "./Note";
import Form from './components/Form'

export default function App({notes=[]}) {
  return (
    <>
    <ol>
      {notes.map((note) => <Note  key={note.id} {...note}/> )}   
    </ol>
      <Form></Form>
    </>
  );
}

