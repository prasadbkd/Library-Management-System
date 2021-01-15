import React, { Component } from "react";
import LibNav from "./libnav";
class libHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      persons: [],
      books: []
    };
  }

  componentDidMount() {
    fetch(
      "https://library-management-syste-4e4be-default-rtdb.firebaseio.com/books.json"
    )
      .then(result =>
        result.json().then(data =>
          this.setState({
            books: data
          })
        )
      )
      .catch(error => console.log(error));

    fetch(
      "https://library-management-syste-4e4be-default-rtdb.firebaseio.com/persons.json"
    )
      .then(result =>
        result.json().then(data =>
          this.setState({
            persons: data
          })
        )
      )
      .catch(error => console.log(error));
  }

  change = event => {
    this.setState({
      user: event.target.value
    });
    console.log(this.state.user);
  };

  render() {
    //let user = JSON.parse(localStorage.getItem("authenticted_user"));
    console.log(this.state.user);
    let names = ["none"];
    let persons = this.state.persons;
    for (let i = 0; i < persons.length; i++) {
      names.push(persons[i].name);
    }
    console.log(names);
    let options = names.map(name => <option value={name}>{name}</option>);
    let rowdata = [];
    let books = this.state.books;
    for (let j = 0; j < books.length - 1; j++) {
      if (books[j] !== null && books[j].issued_to.includes(this.state.user)) {
        rowdata.push(
          <tr key={books[j].id}>
            <td>{books[j].title}</td>
            <td>{books[j].author}</td>
            <td>{books[j].genere}</td>
          </tr>
        );
      }
      // }else if (books[j].issued_to.length!==0){
      //     rowdata.push(   <tr key={books[j].id}>
      //     <td>{books[j].title}</td>
      //     <td>{books[j].author}</td>
      //     <td>{books[j].genere}</td>
      //     </tr>
      //     )}
    }

    return (
      <div>
        <LibNav />
        <div className="jumbotron " id="welcome">
          <h1>Hey Librarian!!</h1>
        </div>
        <div className="select_div">
          <h4>Choose the username to check!</h4>
          &nbsp;&nbsp;{" "}
          <select
            name="users"
            className="form-control"
            id="search"
            onChange={this.change}
          >
            {options}
          </select>
        </div>
        <div className="table_div_mybooks_lib">
          <table className="table-primary table-hover book_table">
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Author</th>
              <th scope="col">Genere</th>
            </tr>

            {rowdata}
          </table>
        </div>
      </div>
    );
  }
}

export default libHome;
