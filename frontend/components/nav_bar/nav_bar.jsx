import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props){
    super(props)
  }

  navBarWhileLoggedIn() {
    return (
      <div className='banner'>
        <div className='profile-link'>
          <Link to={`/profiles/${this.props.currentUser.id}`}> Hello, {this.props.currentUser.firstName}</Link> 
        </div>
        <button className='splashbutton' onClick={ () => this.props.logout()}>Log Out</button>
      </div>
    )
  }

  navBarWhileLoggedOut() {
    return (
      <div className='banner'>
        {/* <button className='splashbutton'>
          <Link to='/signup'>Sign Up</Link>
        </button> */}
        <button  className='splashbutton'  onClick={() => this.props.openModal('signup')}>Signup</button>

        <button className='splashbutton' onClick={() => this.props.openModal('login')}>Login</button>

        {/* <button className='splashbutton'>
          <Link to='/login'>Log In</Link>
        </button> */}
      </div>
    )
  }

 render() {
   return(
    //  <div className='landing-page'>
    <header className='navbar-container'>
       <h1 className='logo'>Ourspace</h1>
       {
        this.props.currentUser ? this.navBarWhileLoggedIn() : this.navBarWhileLoggedOut()
       }
    </header>
    //  </div>
   )
 }
}

export default NavBar