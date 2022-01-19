const notes =[
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-09-31',
    important: true
  },
    {
    id: 2,
    content: 'CSS is easy',
    date: '2019-08-25',
    important: false 
  },
    {
    id: 3,
    content: 'JS is easy',
    date: '2019-04-11',
    important: true
  }
];
const Note = ({ id, content, date }) =>{
  return (
    <li>
      <p>{content}</p>
      <small>
        <time>{date}</time>
      </small>
    </li>
  )
};

export default function App(  ) {
  return (
    <ol>
      {notes.map((note) => <Note  key={note.id} {...note}/> )}   
    </ol>
  );
}

