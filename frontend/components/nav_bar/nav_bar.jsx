import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props){
    super(props)
  }



  navBarWhileLoggedIn() {
    return (
      <div className='banner'>
        <p>Hello, {this.props.currentUser.firstName}</p>
        <button className='splashbutton' onClick={ () => this.props.logout()}>Log Out</button>
      </div>
    )
  }

  navBarWhileLoggedOut() {
    return (
      <div className='banner'>
        <button className='splashbutton'>
          <Link to='/signup'>Sign Up</Link>
        </button>

        <button className='splashbutton'>
          <Link to='/login'>Log In</Link>
        </button>
      </div>
    )
  }

 render() {
   return(
     <header className='navbar-container'>
       <h1 className='logo'>OurSpace</h1>
       {
        this.props.currentUser ? this.navBarWhileLoggedIn() : this.navBarWhileLoggedOut()
       }
     </header>
   )
 }
}

export default NavBar