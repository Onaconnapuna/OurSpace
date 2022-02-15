import React, {useState} from 'react';
import Modal from 'react-modal'
import UpdateBioContainer from './update_bio_container'
import FriendRequestsIndex from '../friendships/friend_requests_index';

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
      // friends: 'Friends',
      // pending: 'Pending Friend Request' 
    } 
    
    // Modal.setAppElement('#root')
    
    this.setStateOfParent = this.setStateOfParent.bind(this)
    this.editProfile = this.editProfile.bind(this)
    this.renderBio = this.renderBio.bind(this)
    this.renderBirthday = this.renderBirthday.bind(this)
    this.renderGender = this.renderGender.bind(this)
    this.renderRelationshipStatus = this.renderRelationshipStatus.bind(this)
    this.addFriendButton = this.addFriendButton.bind(this)
    this.isFriend = this.isFriend.bind(this)
    this.friendRequestSent = this.friendRequestSent.bind(this)
    this.renderButton = this.renderButton.bind(this)
  }

  componentDidMount() {
    // console.log(this.props.currentUser)
    // this.props.fetchFriendships(this.props.currentUser.id)
    setTimeout(() => {
      this.props.fetchCurrentUser(this.props.currentUser.id)
    },2000)
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
            Bio: Pending
          </div>
        )
       } else {
         return (
           <div className='user-info'>
             Bio: {this.state.user.bio} 
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
          Birthday: Pending
          </div>
        )
      } else  {
        return (
          <div className='user-info'>
            Birthday: {this.state.user.birthday} 
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
      if (this.state.user.gener === null) {
        return (
          <div className='user-info'>
            Gender: Pending 
          </div>
        )
      } else {
        return (
          <div className='user-info'>
            Gender/Pronouns: {this.state.user.gender} 
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
          RelationshipStatus: Pending
        </div>
        )
      } else {
        return (
          <div className='user-info'>
            RelationshipStatus: {this.state.user.relationshipStatus} 
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

  friendRequestSent() {
    let friendRequest = false  
    this.props.notifications.forEach((notification)=> {
      if (this.props.user.id === notification.userId) {
        friendRequest = true
      }
    })
    return friendRequest
  }

  renderButton() {
    this.setState({
      pending: 'Friends Checkmark'
    })
  }

  addFriendButton() {
    if (this.isFriend()) { 
      // this.setState({friends: `Friends &#10004` })
      return (
        <div>
          {/* {this.state.friends} */}
          Friends &#10004;
        </div>
      )
    } else if (this.friendRequestSent()) {
      // this.setState({friends: 'Pending Friend Request'})
      return (
        <button onClick={() => this.setState({notifModalIsOpen: true})}> Pending Friend Request </button>
      ) 
    } else {
      // this.setState({friends: 'Add Friend'})
      return(
        <button onClick={()=> this.props.createFriendRequest(this.state.friendRequest)}> Add Friend </button>
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
        <FriendRequestsIndex
        friendRequests={this.props.notifications}
        renderButton={this.renderButton}
        forceProfileRender={this.props.forceProfileRender}
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