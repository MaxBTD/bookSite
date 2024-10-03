function Book(){
    return(<div>
      <h2>{this.props.name}</h2>
      <h3>- {this.props.author}</h3> <br />
      <p>{this.props.genre}</p>
    </div>);
  }

  export default Book;