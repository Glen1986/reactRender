import { Note } from "./Note";
import { notes } from "./Table";
import {Form} from './components/Form'

export default function App(  ) {
  return (
    <>
    <ol>
      {notes.map((note) => <Note  key={note.id} {...note}/> )}   
    </ol>
      <Form></Form>
    </>
  );
}

