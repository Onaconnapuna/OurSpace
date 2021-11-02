import React from 'react';
import Modal from '../modal/modal'

class Bio extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.props.user

    this.editProfile = this.editProfile.bind(this)
    this.renderBio = this.renderBio.bind(this)
    this.renderBirthday = this.renderBirthday.bind(this)
    this.renderGender = this.renderGender.bind(this)
    this.renderRelationshipStatus = this.renderRelationshipStatus.bind(this)
  }

  renderBio = () => {
    if (this.props.user.bio === null || this.props.user.bio === '' ) {
      return (
        <div>
          <button onClick={() => this.props.openModal('updateBio')}>Add Bio</button>
        </div>
      )
    } else {
      return (
        <div className='user-info'>
          Bio: {this.state.bio} 
        </div>
      )
    }
  }

  renderBirthday = () => {
    if (this.state.birthday === null || this.state.birthday === '') {
      return (
        <div>
          <button onClick={() => this.props.openModal('updateBio')}>Add Birthday</button>
        </div>
      )
    } else {
      return (
        <div className='user-info'>
          Birthday: {this.state.birthday} 
        </div>
      )
    }
  }

  renderGender = () => {
    if (this.state.gender === null || this.state.gender === '') {
      return (
        <div>
          <button onClick={() => this.props.openModal('updateBio')}>Add Gender/Pronouns</button>
        </div>
      )
    } else {
      return (
        <div className='user-info'>
          Gender/Pronouns: {this.state.gender} 
        </div>
      )
    }
  }
 
  renderRelationshipStatus = () => {
    if (this.state.relationshipStatus === null || this.state.relationshipStatus === '') {
      return (
        <div>
          <button onClick={() => this.props.openModal('updateBio')}>Add Relationship Status</button>
        </div>
      )
    } else {
      return (
        <div className='user-info'>
          RelationshipStatus: {this.state.relationshipStatus} 
        </div>
      )
    }
  }


  editProfile() {
    if (this.props.user.id === window.currentUser.id) {
      return (
        <button onClick={ () => this.props.openModal('editProfile')}>Edit Profile</button>
      )
    }
  }


  render() {
    return(
      
      <div className='bio-container'>
        <Modal />
      <div className='bio'>

        <h3> {this.props.user.firstName} {this.props.user.lastName}</h3>

        {this.editProfile()}

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