import React, { Component } from 'react'
import Nav from './libnav'
 class CommentsLib extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             comments:[],
             comment:""
             
        }
    }
    componentDidMount(){
        fetch("http://localhost:3000/comments").then(result=>result.json().then(data=>this.setState({
            comments:data
        })))
        .catch((error)=>console.log(error));
     }
     componentDidUpdate(){
        fetch("http://localhost:3000/comments").then(result=>result.json().then(data=>this.setState({
            comments:data
        })))
        .catch((error)=>console.log(error));
     }

     handleChange = event => {
 
        this.setState({ comment: event.target.value });
    };

    DeleteComment = (comment)=>{
        
        const comment1 = comment;
       // let user = JSON.parse(localStorage.getItem("authenticted_user"));
        let id=comment1.id;

        // let commentObj = {
        //     "body": comment,
        //     "username": user.name
        // }
        fetch("http://localhost:3000/comments/"+id,{
            method:'DELETE',
            
        })
             
        
    }
    render() {
        
        
        let commentList = this.state.comments.map((comment)=>{
            return (
                <div class="container">
                            <div class="jumbotron" id='comment'>
                              <span onDoubleClick={()=>this.DeleteComment(comment)}> <b className='comment-user'>{comment.username}</b> : {comment.body}</span> 
                            </div>
                </div>
            )
        })
       
    
        
        return (
            <div>
                <Nav></Nav>
                    <div class="container" id='comment-intro'>
                            <div class="jumbotron" id='comment-intro-body'>
                                <h6>As a Librarian you have the ability to delete ❌ any comment made by any user just by double clicking it.
                                </h6>
                            </div>
                    </div>
                    <div>
                    {commentList}
                    </div>
                   
                    
               
                   

            </div>
        )
    }
}

export default CommentsLib
