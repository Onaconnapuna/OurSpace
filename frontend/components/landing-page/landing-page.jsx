import React from 'react'
import LoginFormContainer from "../session_form/login_form_container"
import SignUpFormContainer from "../session_form/signup_form_container";
import NavBarContainer from '../nav_bar/nav_bar_container';
import Modal from 'react-modal'

class LandingPage extends React.Component{
  constructor(props) {
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

  switchModals = (bool1, bool2) => {
    this.setState({signUpModalIsOpen: bool1})
    this.setState({loginModalIsOpen: bool2});
  }

  render() {
    return ( 
      <div className='landing-page'>
          <NavBarContainer />
        <div className='welcome-container'>
          <div className='welcome'>
            <div className='landing-page-welcome'>
              <h3>Ourspace</h3>
            <img className='landing-page-logo' src="https://ourspace-fullstackproject-dev.s3.us-east-2.amazonaws.com/ourspace.png"/>
            </div>
            <h4>A Demo Application Made by Connor Germain</h4>
          </div>
          <div className='landing-page-session-buttons-container'>
            <div className='landing-page-session-buttons'>
              <button onClick={() => this.setState({signUpModalIsOpen: true})}>Sign Up</button>
              <button onClick={() => this.setState({loginModalIsOpen: true})}>Log In</button>
            </div>
            <Modal
            parentSelector = { () => document.body}
            isOpen={this.state.signUpModalIsOpen}
            overlayClassName='modal-background'
            className='modal-child'
            onRequestClose={() => this.setState({signUpModalIsOpen: false})}
            >
            <SignUpFormContainer
            switchModals={this.switchModals}
            />
            </Modal>

            <Modal
            parentSelector = { () => document.body}
            isOpen={this.state.loginModalIsOpen}
            overlayClassName='modal-background'
            className='modal-child'
            onRequestClose={() => this.setState({loginModalIsOpen: false})}
            >
            <LoginFormContainer
            switchModals={this.switchModals}
            />
            </Modal>
          </div>
        </div>
  
      </div>
    )
    }
}

export default LandingPage