import React, {useState} from 'react';
import Modal from 'react-modal'
import UpdateBioContainer from './update_bio_container'

class Bio extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: this.props.user,
      modalIsOpen : false 
    } 
    
    Modal.setAppElement('#root')
    
    this.setStateOfParent = this.setStateOfParent.bind(this)
    this.editProfile = this.editProfile.bind(this)
    this.renderBio = this.renderBio.bind(this)
    this.renderBirthday = this.renderBirthday.bind(this)
    this.renderGender = this.renderGender.bind(this)
    this.renderRelationshipStatus = this.renderRelationshipStatus.bind(this)
    this.addFriendButton = this.addFriendButton.bind(this)
    this.isFriend = this.isFriend.bind(this)
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
    console.log(this.props.user.id.toString())
    for(let i = 1; i < this.props.currentUser.friends.length, i++; ) {
      if (this.props.currentUser.friends[i].includes(`${this.props.user.id}`)) {
        console.log('returned true')
        return true
      }
    }
    console.log('returned false')
    return false
  }

  addFriendButton() {
    if (this.isFriend()) {
      return (
        <div>
          Friends 'Checkmark'
        </div>
      )
    } else {
      return(
        <button> Add Friend </button>
      )
    }
  }

  render() {
    {console.log(this.props.currentUser)}
    return(

      <div className='bio-container'>

      <Modal 
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
      
        {this.props.user.id == this.props.currentUser.id ? this.editProfile() : this.addFriendButton() }

        {this.renderBio()}

        {this.renderBirthday()}

        {this.renderGender()}

        {this.renderRelationshipStatus()}

      </div>

      </div>
    )
  }
}

export default Bio