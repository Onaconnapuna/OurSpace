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

      key: 0 
    }

    // this.notificationHelper = this.notificationHelper.bind(this)
    this.links = this.links.bind(this)
    this.switchModals = this.switchModals.bind(this)
    this.handleLogOut = this.handleLogOut.bind(this)
    this.requestClose = this.requestClose.bind(this)
    this.onProfilePage = this.onProfilePage.bind(this)
    Modal.setAppElement('#root')
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentDidUpdate(prevProps) {
    if (this.props.friendRequests === prevProps.friendRequests && this.props.currentUser) {
      this.props.fetchFriendRequests(this.props.currentUser.id)
    }
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

  onProfilePage() {
    if (this.props.profilePage) {
      return (
        <div>
          <Link className='profile-link-profile'to={`/profiles/${this.props.currentUser.id}`} onClick={() => this.props.fetchUser(this.props.currentUser.id)}> 
            <img className='nav-photo' src={`${this.props.currentUser.profilePhoto.imageUrl}`}/>
            Hello, {this.props.currentUser.firstName}
          </Link> 
        </div>
      )
    } else {
      return (
        <div>
          <Link className='profile-link'to={`/profiles/${this.props.currentUser.id}`} onClick={() => this.props.fetchUser(this.props.currentUser.id)}> 
            <img className='nav-photo' src={`${this.props.currentUser.profilePhoto.imageUrl}`}/>
            Hello, {this.props.currentUser.firstName}
          </Link> 
        </div>
      )
    }
  }

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

  // notificationHelper() {
  //   if (this.props.currentUser.notifications) {
  //     return<button className="dropdown-item" onClick={() => this.setState({notificationsModalIsOpen: true})}> Notifications {this.props.friendRequests.length}</button>                 
  //   } else {
  //     return ''
  //   }
  // }

  links() {
    return (
      <div className="links-container">
        <div className="link-item">
          <a href='https://www.linkedin.com/in/connor-germain-04ab10188/' className="linked-in" ><img src="/assets/linked_in" alt="" /></a>
        </div>
        <div className="link-item">
          <a href= 'https://angel.co/profile/edit/overview' className="angel-list"> <img src="/assets/angel_list" /></a>
        </div>
        <div className="link-item">
          <a href='https://github.com/Onaconnapuna' className="git-hub"> <img src="/assets/github_logo" alt="" /></a>
        </div>
      </div>
    )
  }

  navBarWhileLoggedIn() {
    return (
      <div className='banner'>
        {this.onProfilePage()}
        <div className="ellipsis-button-background-nav">
          <button className='ellipsis-button'onClick={() => this.setState({notificationsModalIsOpen: true})} className="bell"> <i className="fa fa-bell" aria-hidden="true" style={{fontSize: 24, color: '#65676B' }}></i></button>
          <div className="notifications-num-container">
            <div className="notifications-num"> {this.props.friendRequests.length} </div>
          </div>
        </div>
        <div className="ellipsis-button-background-nav" ref={this.container}>
          <button className='ellipsis-button' onClick={() => this.handleDropDown()}> <i className="fa fa-ellipsis-h" aria-hidden="true"></i></button>
          {this.state.dropDownIsOpen && (
          <div className="dropdown-nav">
            <button className="dropdown-item" onClick={() => this.handleLogOut()}>Logout</button>
            {/* {this.notificationHelper()} */}
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

  requestClose() {
    this.setState({notificationsModalIsOpen: false})
  }

  render() {
      return(
       <header className='navbar-container'>
         <Modal
         parentSelector = { () => document.body}
         isOpen={this.state.notificationsModalIsOpen}
         overlayClassName='modal-background'
         className='modal-child'
         onRequestClose={ () => this.setState({notificationsModalIsOpen: false})}
         >
           <FriendRequestsIndexContainer 
           friendRequests={this.props.friendRequests}
           forceProfileRender={this.props.forceProfileRender}
           requestClose={this.requestClose}
           />
         </Modal>
         <Link to={'/main'} className="main-page-link">
          <h1 className='ourspace'>Ourspace</h1>
          <img className='logo-navbar' src="https://ourspace-fullstackproject-dev.s3.us-east-2.amazonaws.com/ourspace.png"/>
         </Link>

         {this.links()}
          {
           this.props.currentUser ? this.navBarWhileLoggedIn() : this.navBarWhileLoggedOut()
          }
       </header>
      )
    }
}

export default NavBar