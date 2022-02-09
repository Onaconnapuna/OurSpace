import React from "react";
import { Link } from "react-router-dom";
import LoginFormContainer from "../session_form/login_form_container"
import SignUpFormContainer from "../session_form/signup_form_container";
import Modal from 'react-modal'
import FriendRequestsIndexContainer from "../friendships/friend_requests_index_container";

class NavBar extends React.Component {
  constructor(props){
    super(props)

    this.container = React.createRef();

    this.state = {
      session: {
        email:'demouser@demo.com',
        password: 'password'
      },
      signUpModalIsOpen: false,
      loginModalIsOpen: false,
      notificationsModalIsOpen: false,
      dropDownIsOpen: false,
    }

    this.notificationHelper = this.notificationHelper.bind(this)
    this.switchModals = this.switchModals.bind(this)
    this.handleLogOut = this.handleLogOut.bind(this)
    Modal.setAppElement('#root')
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
    window.onbeforeunload = function() {
      this.props.fetchFriendRequests(this.props.currentUser.id);
    };
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
    window.onbeforeunload = null;
  }

  handleClickOutside = (event) => {
    if (
      this.container.current &&
      !this.container.current.contains(event.target)
    ) {
      this.setState({
        dropDownIsOpen: false,
      });
    }
  };

  handleLogOut() {
    this.setState({dropDownIsOpen: false})
    this.props.logout()
  }

  handleDropDown() {
    if (this.state.dropDownIsOpen === true) {
      this.setState({dropDownIsOpen: false }) 
    } else {
      this.setState({dropDownIsOpen: true})
    }
  }

  notificationHelper() {
    if (this.props.currentUser.notifications) {
      return Object.values(this.props.currentUser.notifications).length
    } else {
      return ''
    }
  }

  navBarWhileLoggedIn() {
    return (
      <div className='banner'>
        <div className>
          <Link className='profile-link'to={`/profiles/${this.props.currentUser.id}`} onClick={() => this.props.fetchUser(this.props.currentUser.id)}> Hello, {this.props.currentUser.firstName}</Link> 
        </div>
        <div className="ellipsis-button-background-nav" ref={this.container}>
          <button className='ellipsis-button' onClick={() => this.handleDropDown()}> &#8230; </button>
          {this.state.dropDownIsOpen && (
            <div className="dropdown-nav">
              <button className="dropdown-item" onClick={() => this.handleLogOut()}>Logout</button>
              <button className="dropdown-item" onClick={() => this.setState({notificationsModalIsOpen: true})}> Notifications {this.notificationHelper()}</button>
            </div>
          )}
          </div>
        </div>
    )
  }



  navBarWhileLoggedOut() {
    return (
      <div className='banner'>
        {/* <button  className='splashbutton' onClick={() => this.setState({signUpModalIsOpen: true})}>Signup</button> */}

        {/* <button className='splashbutton' onClick={() => this.setState({loginModalIsOpen: true})}>Login</button> */}
      </div>)
  }

  switchModals = (bool1, bool2) => {
    this.setState({signUpModalIsOpen: bool1})
    this.setState({loginModalIsOpen: bool2});
  }

  render() {
      return(
       <header className='navbar-container'>
         <Modal
         isOpen={this.state.notificationsModalIsOpen}
         overlayClassName='modal-background'
         className='modal-child'
         onRequestClose={ () => this.setState({notificationsModalIsOpen:false})}
         >
           <FriendRequestsIndexContainer 
           friendRequests={this.props.friendRequests}
           />
         </Modal>
         <Link to={'/main'} className="main-page-link">
          <h1 className='ourspace'>Ourspace</h1>
          <img className='logo-navbar' src="https://ourspace-fullstackproject-dev.s3.us-east-2.amazonaws.com/ourspace.png"/>
         </Link>
          {
           this.props.currentUser ? this.navBarWhileLoggedIn() : this.navBarWhileLoggedOut()
          }
       </header>
      )
    }
}

export default NavBar