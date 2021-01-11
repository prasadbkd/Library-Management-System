import React, { Component } from 'react'
import Nav from './navbarBeforeLogin'
import NavLog from './usernav'
 class Comments extends Component {
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

    postComment = (event)=>{
        event.preventDefault();
        const comment = this.state.comment;
        let user = JSON.parse(localStorage.getItem("authenticted_user"));
        let commentObj = {
            "body": comment,
            "username": user.name
        }
        fetch("http://localhost:3000/comments",{
            method:'POST',
            body:JSON.stringify(commentObj),
            headers:{
                 "Content-type":"application/json"
            }
        }).then(result=>console.log(result.json().then(data=>data))).catch(error=>console.log(error));
         this.setState({
                comment:"",
             
         })
    }
    render() {
        let user = JSON.parse(localStorage.getItem("authenticted_user"));
        let nav=[]
        let form=[]
        let commentList = this.state.comments.map((comment)=>{
            return (
                <div class="container">
                            <div class="jumbotron" id='comment'>
                                <b className='comment-user'>{comment.username}</b> : {comment.body}
                            </div>
                </div>
            )
        })
        if(user===null){
            form.push(
            <div class="container" >
            <div class="jumbotron" id='comment-form'>
            <form onSubmit={this.postComment}  >
            <input value={this.state.comment} className="form-control" id='comments_input' onChange={this.handleChange} placeholder="Login to Comment.." readOnly/>
            <br></br><input type="submit" className="btn btn-primary" value="Comment" disabled />
                
            </form>
            </div>
    </div>)
            nav.push(<Nav></Nav>)    
    
}
    else{
       form.push( <div class="container" >
        <div class="jumbotron" id='comment-form'>
        <form onSubmit={this.postComment} >
        <input value={this.state.comment} className="form-control" id='comments_input' onChange={this.handleChange} placeholder="Comments.." />
        <br></br><input type="submit" className="btn btn-primary" value="Comment" />
            
        </form>
        </div>
</div>)
 nav.push(<NavLog></NavLog>) 
    }
        
        return (
            <div>
                {nav}
                    <div class="container" id='comment-intro'>
                            <div class="jumbotron" id='comment-intro-body'>
                                <h6>Tell us how you feel. Feel Free to Appreciate or criticize. We value your suggetions and try to improve ourselves.
                                    If you want us to include more  books or more copies of a particular book please comment.... 📝 
                                </h6>
                            </div>
                    </div>
                    <div>
                    {commentList}
                    </div>
                   
                    {form}
               
                   

            </div>
        )
    }
}

export default Comments
