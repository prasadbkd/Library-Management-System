import React, { Component } from 'react'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
 class usernav extends Component {
    click = ()=>{
       // localStorage.removeItem("message");
        localStorage.removeItem("authenticted_user");
    }
    render() {
        
        let y= "📚" 
        
        return (
            <div>
                 <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <a className="navbar-brand" href='/member-home'><img src="https://image.freepik.com/free-vector/books-store-library-emblem-read-more-banner_53562-5727.jpg" alt="brand" style={{width:'40px',height:'40px'}}/></a>
                <button className="navbar-toggler" data-target="#my-nav" data-toggle="collapse" aria-controls="my-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div id="my-nav" className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                    <a className="nav-link" href="/member-home"><HomeRoundedIcon/><span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                     <a className="nav-link " href="/member-mybooks" >{y}My Books</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link " href="/" onClick={this.click} ><ExitToAppIcon></ExitToAppIcon></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link " href="/comments"  >Comments📝</a>
                    </li>
                </ul>
                </div>
            </nav>
            </div>
        )
    }
}

export default usernav
