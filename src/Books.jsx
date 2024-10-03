import './Books.css';

function Book(props){
    return(<div className='bookCell'>
      <p><b>"{props.name}"</b> - {props.author}</p>
      <sub>{props.genre}</sub>
    </div>);
  }

  export default Book;