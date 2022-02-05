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
    if (this.state.user.bio === null || this.state.user.bio === '' ) {
      return (
        <div>
          <button onClick={() => this.setState({modalIsOpen:true})}>Add Bio</button>
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

  renderBirthday = () => {
    if (this.state.user.birthday === null || this.state.user.birthday === '') {
      return (
        <div>
          <button onClick={() => this.setState({modalIsOpen:true})}>Add Birthday</button>
        </div>
      )
    } else {
      return (
        <div className='user-info'>
          Birthday: {this.state.user.birthday} 
        </div>
      )
    }
  }

  renderGender = () => {
    if (this.state.user.gender === null || this.state.user.gender === '') {
      return (
        <div>
          <button onClick={() => this.setState({modalIsOpen:true})}>Add Gender/Pronouns</button>
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
 
  renderRelationshipStatus = () => {
    if (this.state.user.relationshipStatus === null || this.state.user.relationshipStatus === '') {
      return (
        <div>
          <button onClick={() => this.setState({modalIsOpen:true})}>Add Relationship Status</button>
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

  editProfile() {
    return <button onClick={() => this.setState({modalIsOpen:true})}> Edit Profile </button>
  }

  render() {
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
      
        {this.props.user.id == this.props.currentUser.id ? this.editProfile() : 'hello'}

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