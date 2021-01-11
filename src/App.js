import Home from './components/Home'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import'bootstrap/dist/js/bootstrap.bundle'
import {BrowserRouter ,Route,Switch} from 'react-router-dom'
import Login from './components/login'
import MemberHome from './components/memberHome'
import LibHome from './components/librarianHome'
import Mybooks from './components/memberMyBooks'
import React, { Component } from 'react'
import Signup from './components/signup';
import Comments from './components/Comments'
import CommentsLib from './components/Comments Libranian';
 class App extends Component {
  render() {
    return (
      <BrowserRouter>
     <div className="App">
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/signup' component={Signup}></Route>
        <Route path='/member-home' component={MemberHome}></Route>
        <Route path='/lib-home' component={LibHome}></Route>
        <Route path='/member-mybooks' component={Mybooks}></Route>
        <Route path='/comments' component={Comments}></Route>
        <Route path='/commentslib' component={CommentsLib}></Route>
      </Switch>
      
      
      </div>
      </BrowserRouter>
    )
  }
}

export default App
