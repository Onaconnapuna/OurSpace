import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      email:'demouser@demo.com',
      password: 'password'
    }
  }

  navBarWhileLoggedIn() {
    return (
      <div className='banner'>
        <div>
          <Link className='profile-link'to={`/profiles/${this.props.currentUser.id}`}> Hello, {this.props.currentUser.firstName}</Link> 
        </div>
        <button className='splashbutton' onClick={ () => this.props.logout()}>Log Out</button>
      </div>
    )
  }

  navBarWhileLoggedOut() {
    return (
      <div className='banner'>
        <button  className='splashbutton'  onClick={() => this.props.openModal('signup')}>Signup</button>

        <button className='splashbutton' onClick={() => this.props.openModal('login')}>Login</button>
      </div>
    )
  }

 render() {
   return(
  
    <header className='navbar-container'>
       <h1 className='logo'>Ourspace</h1>
       {
        this.props.currentUser ? this.navBarWhileLoggedIn() : this.navBarWhileLoggedOut()
       }
    </header>
  
   )
 }
}

export default NavBar