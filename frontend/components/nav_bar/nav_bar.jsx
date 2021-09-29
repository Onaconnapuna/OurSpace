import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props){
    super(props)
  }

  navBarWhileLoggedIn() {
    return (
      <div>
        <p>Hello {this.props.currentUser.firstName}</p>
        <button onClick={ () => this.props.logout()}>Log Out</button>
      </div>
    )
  }

  navBarWhileLoggedOut() {
    return (
      <div>
        <button>
          <Link to='/signup'>Sign Up</Link>
        </button>

        <button>
          <Link to='/login'>Log In</Link>
        </button>
      </div>
    )
  }

 render() {
   return(
     <header>
       <h1>OurSpace</h1>
       {
        this.props.currentUser ? this.navBarWhileLoggedIn() : this.navBarWhileLoggedOut()
       }
     </header>
   )
 }
}

export default NavBar