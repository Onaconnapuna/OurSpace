import React from "react";
import { Link } from "react-router-dom";
import LoginFormContainer from "../session_form/login_form_container"
import SignUpFormContainer from "../session_form/signup_form_container";
import Modal from 'react-modal'

class NavBar extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      session: {
        email:'demouser@demo.com',
        password: 'password'
      },
      signUpModalIsOpen: false,
      loginModalIsOpen: false,
    }

    this.switchModals = this.switchModals.bind(this)
    Modal.setAppElement('#root')
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
        <button  className='splashbutton' onClick={() => this.setState({signUpModalIsOpen: true})}>Signup</button>

        <button className='splashbutton' onClick={() => this.setState({loginModalIsOpen: true})}>Login</button>
      </div>
    )
  }

  switchModals = (bool1, bool2) => {
    this.setState({signUpModalIsOpen: bool1})
    this.setState({loginModalIsOpen: bool2});
  }

  render() {
   return(
    <header className='navbar-container'>
      <Modal
        isOpen={this.state.signUpModalIsOpen}
        overlayClassName='modal-background-alt'
        className='modal-child-alt'
        onRequestClose={() => this.setState({signUpModalIsOpen: false})}
      >
        <SignUpFormContainer
        switchModals={this.switchModals}
        />
      </Modal>

      <Modal
        isOpen={this.state.loginModalIsOpen}
        overlayClassName='modal-background-alt'
        className='modal-child-alt'
        onRequestClose={() => this.setState({loginModalIsOpen: false})}
      >
        <LoginFormContainer
        switchModals={this.switchModals}
        />
      </Modal>
       <h1 className='logo'>Ourspace</h1>
       {/* <img src="../../../app/assets/images/ourspace.png"/> */}
       <div className="logo-pic"></div>
       {
        this.props.currentUser ? this.navBarWhileLoggedIn() : this.navBarWhileLoggedOut()
       }
    </header>
   )
 }
}

export default NavBar