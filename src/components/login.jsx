import React, { Component } from "react";
import Nav from "./navbarBeforeLogin";
class login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      accounts: [],
      librarian: [],
      message: "",
      messagelib: ""
    };
  }

  //  componentDidMount(){
  //     fetch("http://localhost:3000/persons").then(result=>result.json().then(data=>this.setState({
  //         accounts:data
  //     })))
  // .catch((error)=>console.log(error));
  //  }

  change = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };
  componentDidMount() {
    fetch(
      "https://library-management-syste-4e4be-default-rtdb.firebaseio.com/persons.json"
    )
      .then(result =>
        result.json().then(data => {
          console.log(data);
          this.setState({
            accounts: Object.entries(data)
          });
        })
      )
      .catch(error => console.log(error));

    fetch(
      "https://library-management-syste-4e4be-default-rtdb.firebaseio.com/librarians.json"
    )
      .then(result =>
        result.json().then(data =>
          this.setState({
            librarian: Object.entries(data)
          })
        )
      )
      .catch(error => console.log(error));
  }
  submitMember = event => {
    event.preventDefault();

    let accounts = this.state.accounts;
    console.log(accounts);
    let authenticated_user = {};
    for (let i = 0; i < accounts.length; i++) {
      console.log(accounts[i]);
      if (
        accounts[i][1].email === this.state.email &&
        accounts[i][1].password === this.state.password
      ) {
        authenticated_user = accounts[i][1];
        // localStorage.setItem("authenticted_useremail",authenticated_user.email)
        // localStorage.setItem("authenticted_username",authenticated_user.name)
        // localStorage.setItem("authenticted_userid",authenticated_user.id)
        // console.log(localStorage.getItem("authenticted_user"))
        let authenticated_user_serialized = JSON.stringify(authenticated_user);
        localStorage.setItem(
          "authenticted_user",
          authenticated_user_serialized
        );

        console.log(this.props);
        this.props.history.push("/member-home");
      }
    }

    let message = "Invalid Credentials";
    //localStorage.setItem("message",message)
    this.setState({
      message: message
    });
  };
  submitlib = event => {
    event.preventDefault();

    let accounts = this.state.librarian;
    let authenticated_user = {};
    for (let i = 0; i < accounts.length; i++) {
      if (
        accounts[i].email === this.state.email &&
        accounts[i].password === this.state.password
      ) {
        authenticated_user = accounts[i];
        let authenticated_user_serialized = JSON.stringify(authenticated_user);
        localStorage.setItem(
          "authenticted_user",
          authenticated_user_serialized
        );

        console.log(this.props);
        this.props.history.push("/lib-home");
      }
    }

    let message = "Invalid Credentials";
    //localStorage.setItem("message",message)
    this.setState({
      messagelib: message
    });
  };
  render() {
    // let message =localStorage.getItem("message")
    // let messagelib =localStorage.getItem("messagelib")
    return (
      <div>
        <Nav />
        <div className="container login-container">
          <div className="row">
            <div className="col-md-6 login-form-1" id="left-login">
              <form onSubmit={this.submitMember}>
                <h3>Member Login</h3>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email *"
                    name="email"
                    onChange={this.change}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Your Password *"
                    name="password"
                    onChange={this.change}
                  />
                </div>
                <div className="form-group">
                  <input type="submit" className="btnSubmit" value="Login" />
                </div>

                <h4 style={{ color: "white" }}>{this.state.message}</h4>
              </form>
            </div>
            <div className="col-md-6 login-form-2">
              <form onSubmit={this.submitlib} method="POST">
                <h3>Librarian Login</h3>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email *"
                    name="email"
                    onChange={this.change}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Your Password *"
                    name="password"
                    onChange={this.change}
                  />
                </div>
                <div className="form-group">
                  <input type="submit" className="btnSubmit" value="Login" />
                </div>
                <h4 style={{ color: "white" }}>{this.state.messagelib}</h4>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default login;
