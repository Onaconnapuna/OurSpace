import React from 'react';
import Modal from '../modal/modal'

class Bio extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.props.user

    this.renderBio = this.renderBio.bind(this)
    this.renderBirthday = this.renderBirthday.bind(this)
    this.renderGender = this.renderGender.bind(this)
    this.renderRelationshipStatus = this.renderRelationshipStatus.bind(this)
  }



  renderBio = () => {
    if (this.props.user.bio === undefined || this.props.user.bio === '' ) {
      return (
        <div>
          <button onClick={() => this.props.openModal('updateBio')}>Add Bio</button>
        </div>
      )
    } else {
      return (
        <div>
          Bio: {this.props.user.bio} 
        </div>
      )
    }
  }

  renderBirthday = () => {
    if (this.props.user.birthday === undefined || this.props.user.birthday === '') {
      return (
        <div>
          <button onClick={() => this.props.openModal('updateBio')}>Add Birthday</button>
        </div>
      )
    } else {
      return (
        <div>
          Birthday: {this.props.user.birthday} 
        </div>
      )
    }
  }

  renderGender = () => {
    if (this.props.user.gender === undefined || this.props.user.gender === '') {
      return (
        <div>
          <button onClick={() => this.props.openModal('updateBio')}>Add Gender/Pronouns</button>
        </div>
      )
    } else {
      return (
        <div>
          Gender/Pronouns: {this.props.user.gender} 
        </div>
      )
    }
  }
 
  renderRelationshipStatus = () => {
    if (this.props.user.bio === undefined || this.props.user.relationshipStatus === '') {
      return (
        <div>
          <button onClick={() => this.props.openModal('updateBio')}>Add Relationship Status</button>
        </div>
      )
    } else {
      return (
        <div>
          RelationshipStatus: {this.props.user.relationshipStatus} 
        </div>
      )
    }
  }


  render() {
    return(
      
      <div>
        <Modal />
        {this.renderBio()}

        {this.renderBirthday()}

        {this.renderGender()}

        {this.renderRelationshipStatus()}

      </div>
    )
  }
}

export default Bio