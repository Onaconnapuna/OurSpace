import React from 'react'

class UpdateForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: this.props.user,
      updateProfilePhotoFile: null,
      updateBackgroundPhotoFile: null
     }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleProfileFile = this.handleProfileFile.bind(this)
    this.handleBackgroundFile = this.handleBackgroundFile.bind(this)
  }
  
  componentDidMount() {
    this.props.fetchUser(this.state.user.id)
  }

  // componentWillUnmount(){
  //   this.props.fetchUser(this.state.id)
  // }

  update(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    })
  }

  handleProfileFile(e) {
    const file =  e.currentTarget.files[0]
    this.setState({updateProfilePhotoFile: file})
  }

  handleBackgroundFile(e) {
    const file =  e.currentTarget.files[0]
    this.setState({updateBackgroundPhotoFile: file})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.setStateOfParent(false);
    // this.props.updateUser(this.state);

    if (this.state.updateProfilePhotoFile) {
      const formData = new FormData();
      formData.append('profile_photo[photo]', this.state.updateProfilePhotoFile);
      formData.append('profile_photo[user_id]', this.state.user.id)
  
      $.ajax({
        url: `/api/users/${this.props.user.id}/profile_photos/${this.props.user.profilePhoto.id}`,
        method: 'PUT',
        data: formData,
        contentType: false,
        processData: false
      });
    }

    if (this.state.updateBackgroundPhotoFile) {
      const backgroundFormData = new FormData();
      backgroundFormData.append('background_photo[photo]', this.state.updateBackgroundPhotoFile),
      backgroundFormData.append('background_photo[user_id]', this.state.user.id)
  
      $.ajax({
        url: `/api/users/${this.props.user.id}/background_photos/${this.props.user.backgroundPhoto.id}`,
        method: 'PUT',
        data: backgroundFormData,
        contentType: false,
        processData: false
      });
    }
  }

    // formData.append('user[email]', this.state.email)
    // formData.append('user[firstName]', this.state.firstName);
    // formData.append('user[lastName]', this.state.lastName);
    // formData.append('user[bio]', this.state.bio);
    // formData.append('user[birthday]', this.state.birthday);
    // formData.append('user[gender]', this.state.gender);
    // formData.append('user[relationshipStatus]', this.state.relationshipStatus);
    // if (this.state.photoFile) {
    //   formData.append('user[photo]', this.state.photoFile);
    // }

    // $.ajax({
    //   url: `/api/users/${this.state.id}`,
    //   method: 'PATCH',
    //   data: formData,
    //   contentType: false,
    //   processData: false
    // });
  // }

  render() {

    return (
    <div className='session-form-background'>
      <div className='form-container'>
        <form className ='session-form' onSubmit={this.handleSubmit}>
         
          <h3>Profile</h3>

          <label>Profile Photo
            <input type="file" onChange={this.handleProfileFile} />
          </label>

          <label>Background Photo
            <input type="file" onChange={this.handleBackgroundFile}/>
          </label>

          <label>Bio
            <input type='text' value={this.state.user.bio} onChange={this.update('bio')}/>
          </label>

          <label>Birthday
            <input type="text" value={this.state.user.birthday} onChange={this.update('birthday')} />
          </label>

          <label>Gender/Pronouns
            <input type="text" value={this.state.user.gender} onChange={this.update('gender')} />
          </label>

          <label>RelationshipStatus
            <input type="text" value={this.state.user.relationshipStatus} onChange={this.update('relationshipStatus')} />
          </label>
          <button>Update Bio</button>
        </form>
      </div>
    </div>
    )
  }
}

export default UpdateForm