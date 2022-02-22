import React, {useState} from 'react';
import Modal from 'react-modal'
import UpdateBioContainer from './update_bio_container'
import FriendRequestsIndexContainer from '../friendships/friend_requests_index_container';

class Bio extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: this.props.user,
      modalIsOpen: false, 
      notifModalIsOpen: false,
      friendRequest: {
        userId: this.props.currentUser.id,
        friendId: this.props.user.id,
      },
      addFriendButton: 'Add Friend',
      disabled: false
    } 
    
    this.setStateOfParent = this.setStateOfParent.bind(this)
    this.editProfile = this.editProfile.bind(this)
    this.renderBio = this.renderBio.bind(this)
    this.renderBirthday = this.renderBirthday.bind(this)
    this.renderGender = this.renderGender.bind(this)
    this.renderRelationshipStatus = this.renderRelationshipStatus.bind(this)
    this.addFriendButton = this.addFriendButton.bind(this)
    this.isFriend = this.isFriend.bind(this)
    this.friendRequestSent = this.friendRequestSent.bind(this)
    this.sentFriendRequest = this.sentFriendRequest.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props.user !== prevProps.user) {
      this.setState({
        user: this.props.user
      })
    }
  }

  setStateOfParent = (bool) => {
    this.setState({modalIsOpen: bool});
  }


  renderBio = () => {
    if ((this.state.user.bio === null || this.state.user.bio === '' )  && this.props.user.id === this.props.currentUser.id) {
      return (
        <div>
          <button onClick={() => this.setState({modalIsOpen:true})}>Add Bio</button>
        </div>
      )
    } else {
       if(this.state.user.bio === null ) {
        return (
          <div className='user-info'>
             <div className='display'> <i className="fa fa-user-circle" aria-hidden="true" style={{fontSize: 24 }}></i> </div>
             <p> Pending </p>
          </div>
        )
       } else {
         return (
           <div className='user-info'>
             <div className='display'> <i className="fa fa-user-circle" aria-hidden="true" style={{fontSize: 24 }}></i> </div>
            <p id='bio-text'> {this.state.user.bio} </p>
           </div>
         )
       }
    }
  }

  renderBirthday = () => {
    if ((this.state.user.birthday === null || this.state.user.birthday === '')  && this.props.user.id === this.props.currentUser.id)  {
      return (
        <div>
          <button onClick={() => this.setState({modalIsOpen:true})}>Add Birthday</button>
        </div>
      )
    } else { 
      if (this.state.user.birthday === null) {
        return (
          <div className='user-info'>
            <div className='display'> <i className="fa fa-birthday-cake" aria-hidden="true" style={{fontSize: 24 }}></i></div>
            <p> Pending </p>
          </div>
        )
      } else  {
        return (
          <div className='user-info'>
            <div className='display'> <i className="fa fa-birthday-cake" aria-hidden="true" style={{fontSize: 24 }}></i></div>
            <p>{this.state.user.birthday}</p>
          </div>
        )
      }
    }
  }

  renderGender = () => {
    if ((this.state.user.gender === null || this.state.user.gender === '')  && this.props.user.id === this.props.currentUser.id)  {
      return (
        <div>
          <button onClick={() => this.setState({modalIsOpen:true})}>Add Gender/Pronouns</button>
        </div>
      )
    } else {
      if (this.state.user.gender === null) {
        return (
          <div className='user-info'>
            <div className='display'> <i className="fa fa-venus-mars" aria-hidden="true" style={{fontSize: 24 }}></i></div>
            <p> Pending </p>
          </div>
        )
      } else {
        return (
          <div className='user-info'>
            <div className='display'> <i className="fa fa-venus-mars" aria-hidden="true" style={{fontSize: 24 }}></i></div>
            <p>{this.state.user.gender}</p>
          </div>
        )
      }
    }
  }
 
  renderRelationshipStatus = () => {
    if ((this.state.user.relationshipStatus === null || this.state.user.relationshipStatus === '') && this.props.user.id === this.props.currentUser.id)  {
      return (
        <div>
          <button onClick={() => this.setState({modalIsOpen:true})}>Add Relationship Status</button>
        </div>
      )
    } else {
      if (this.state.user.relationshipStatus === null ) {
        return (
          <div className='user-info'>
          <div className='display'> <i className="fa fa-heart" aria-hidden="true" style={{fontSize: 24 }}></i></div>
          <p> Single </p>
        </div>
        )
      } else {
        return (
          <div className='user-info'>
          <div className='display'> <i className="fa fa-heart" aria-hidden="true" style={{fontSize: 24 }}></i></div>
            <p>{this.state.user.relationshipStatus}</p>
          </div>
        )
      }
    }
  }

  editProfile() {
    return <button onClick={() => this.setState({modalIsOpen:true})}> Edit Profile </button>
  }

  isFriend() {
    let friends = false
    this.props.user.friends.forEach((friend) => {
      if (this.props.currentUser.id === friend.id) {
        friends = true
      }
    })
    return friends
  }

  sentFriendRequest() {
    let sent = false
    // let sentRequests = Object.values(this.props.currentUser.friendRequestSent)
    this.props.currentUser.friendRequestsSent.forEach((request) => {
      if (this.props.user.id === request.friendId) {
        sent = true
      }
    })
    return sent
  }

  friendRequestSent() {
    let friendRequest = false  
    this.props.friendRequests.forEach((notification)=> {
      if (this.props.user.id === notification.userId) {
        friendRequest = true
      }
    })
    return friendRequest
  }

  handleAddFriend() {
    this.setState({
      addFriendButton: 'Friend Request Sent',
      disabled: true
    })
    this.props.createFriendRequest(this.state.friendRequest)
  }

  addFriendButton() {
    if (this.isFriend()) { 
      // this.setState({friends: `Friends &#10004` })
      return (
        <div className='display-friends'>
          {/* {this.state.friends} */}
          Friends &#10004;
        </div>
      )
    } else if (this.friendRequestSent()) {
      // this.setState({friends: 'Pending Friend Request'})
      return (
        <button onClick={() => this.setState({notifModalIsOpen: true})}> Pending Friend Request </button>
      ) 
    } else if (this.sentFriendRequest()) {
        return (<button disabled={true}> Friend Request Sent</button>)
      } else 
      {
      // this.setState({friends: 'Add Friend'})
      return(
        <button onClick={()=> this.handleAddFriend()} disabled={this.state.disabled}> {this.state.addFriendButton} </button>
      )
    }
}


  render() { 
    if (this.props.currentUser.friends === undefined) {
      return null 
    } else {

      return(
  
        <div className='bio-container'>
        <Modal
        parentSelector={ () => document.body}
        isOpen={this.state.notifModalIsOpen}
        overlayClassName='modal-background'
        className='modal-child'
        onRequestClose={() => this.setState({notifModalIsOpen: false})}
        >
        <FriendRequestsIndexContainer
        currentUser={this.props.currentUser}
        forceProfileRender={this.props.forceProfileRender}
        friendRequests={this.props.friendRequests}
        />

        </Modal>
  
        <Modal 
          parentSelector={ () => document.body}
          isOpen={this.state.modalIsOpen}
          overlayClassName='modal-background'
          className='modal-child'
          onRequestClose={() => this.setState({modalIsOpen: false})}
        >
          <UpdateBioContainer 
          user={this.props.user} 
          setStateOfParent={this.setStateOfParent}
          forceProfileRender={this.props.forceProfileRender}
          />
        </Modal>
  
        <div className='bio'>
        
          {this.props.user.id == this.props.currentUser.id ? this.editProfile() : this.addFriendButton()}
      
          <br />
  
          {this.renderBio()}
  
          {this.renderBirthday()}
  
          {this.renderGender()}
  
          {this.renderRelationshipStatus()}
  
        </div>
  
        </div>
      )
    }
  }
  }

export default Bio