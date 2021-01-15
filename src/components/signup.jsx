import React, { Component } from "react";
import "./../App.css";
import Nav from "./navbarBeforeLogin";
class signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }
  change = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };
  postPerson = event => {
    event.preventDefault();
    const { name, email, password } = this.state;
    const person = {
      name: name,
      email: email,
      password: password
    };

    fetch(
      "https://library-management-syste-4e4be-default-rtdb.firebaseio.com/persons.json",
      {
        method: "POST",
        body: JSON.stringify(person),
        headers: {
          "Content-type": "application/json"
        }
      }
    )
      .then(result => console.log(result.json().then(data => data)))
      .catch(error => console.log(error));
    this.setState({
      name: "",
      email: "",
      password: ""
    });
    this.props.history.push("/login");
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <Nav />
        <div className="sign-up">
          <form onSubmit={this.postPerson} method="POST">
            <h3>Sign Up</h3>
            <br />
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name *"
                value={this.state.name}
                name="name"
                onChange={this.change}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your Email *"
                value={this.state.email}
                name="email"
                onChange={this.change}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Your Password *"
                value={this.state.password}
                name="password"
                onChange={this.change}
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                className="btn btn-primary"
                value="Sign up"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default signup;
