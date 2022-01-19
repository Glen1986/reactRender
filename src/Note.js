export const Note = (props) =>{
  console.log({props})
  return (
    <li>
      <p>{props.content}</p>
      <small>
        <time>{props.date}</time>
      </small>
    </li>
  )
};
