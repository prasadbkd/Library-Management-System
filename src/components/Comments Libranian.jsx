import React, { Component } from "react";
import Nav from "./libnav";
class CommentsLib extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      comment: ""
    };
  }
  componentDidMount() {
    fetch(
      "https://library-management-syste-4e4be-default-rtdb.firebaseio.com/comments.json"
    )
      .then(result =>
        result.json().then(data =>
          this.setState({
            comments: Object.entries(data)
          })
        )
      )
      .catch(error => console.log(error));
  }
  componentDidUpdate() {
    fetch(
      "https://library-management-syste-4e4be-default-rtdb.firebaseio.com/comments.json"
    )
      .then(result =>
        result.json().then(data =>
          this.setState({
            comments: Object.entries(data)
          })
        )
      )
      .catch(error => console.log(error));
  }

  handleChange = event => {
    this.setState({ comment: event.target.value });
  };

  DeleteComment = comment => {
    const comment1 = comment[1];
    // let user = JSON.parse(localStorage.getItem("authenticted_user"));
    let id = comment1.id;

    // let commentObj = {
    //     "body": comment,
    //     "username": user.name
    // }
    fetch(
      "https://library-management-syste-4e4be-default-rtdb.firebaseio.com/comments/" +
        id +
        ".json",
      {
        method: "DELETE"
      }
    );
  };
  render() {
    let commentList = this.state.comments.map(comment => {
      return (
        <div className="container" key={comment[1].id}>
          <div className="jumbotron" id="comment">
            <span onDoubleClick={() => this.DeleteComment(comment)}>
              {" "}
              <b className="comment-user">{comment[1].username}</b> :{" "}
              {comment[1].body}
            </span>
          </div>
        </div>
      );
    });

    return (
      <div>
        <Nav />
        <div className="container" id="comment-intro">
          <div className="jumbotron" id="comment-intro-body">
            <h6>
              As a Librarian you have the ability to delete ❌ any comment made
              by any user just by double clickig it.
            </h6>
          </div>
        </div>
        <div>{commentList}</div>
      </div>
    );
  }
}

export default CommentsLib;
