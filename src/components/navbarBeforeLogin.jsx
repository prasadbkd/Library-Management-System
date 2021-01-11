import React from 'react'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ComputerIcon from '@material-ui/icons/Computer';
function navbarBeforeLogin() {
    
    
    return (
        <div>         
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <a className="navbar-brand" href='/'><img src="https://image.freepik.com/free-vector/books-store-library-emblem-read-more-banner_53562-5727.jpg" alt="brand" style={{width:'40px',height:'40px'}}/></a>
                <button className="navbar-toggler" data-target="#my-nav" data-toggle="collapse" aria-controls="my-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div id="my-nav" className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                    <a className="nav-link" href="/"><HomeRoundedIcon/><span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link " href="/signup" >Sign up</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link " href="/login" ><ComputerIcon/>Login</a>
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

export default navbarBeforeLogin
