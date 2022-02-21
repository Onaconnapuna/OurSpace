import React from 'react'

class UpdateForm extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      user: this.props.user,
      updateProfilePhotoFile: null,
      updateBackgroundPhotoFile: null,
      profilePhotoUrl: '',
      backgroundPhotoUrl: '',
     }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleProfileFile = this.handleProfileFile.bind(this)
    this.handleBackgroundFile = this.handleBackgroundFile.bind(this)
    this.profilePicFilePreview = this.profilePicFilePreview.bind(this)
    this.backgroundPhotoFilePreview = this.backgroundPhotoFilePreview.bind(this)
  }

  update(field) {
    return(e) => {
      let user = {...this.state.user} 
      user[field] = e.currentTarget.value
      this.setState({user})
    }
  }

  defaultValue(input) {
    if (this.state.input) {
      return input;
    } else {
      return ''
    }
  }

  handleProfileFile(e) {
    // const file =  e.currentTarget.files[0]
    // this.setState({updateProfilePhotoFile: file})
    e.preventDefault();
    this.setState({updateProfilePhotoFile: e.currentTarget.files[0]})
    const reader = new FileReader()
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({ profilePhotoUrl: reader.result, updateProfilephotoFile: file });

      if (file) {
        reader.readAsDataURL(file);
      } else {
        this.setState({ profilePhotoUrl: "", updateProfilePhotoFile: null });
      }
  }

  handleBackgroundFile(e) {
    e.preventDefault();
    // const file =  e.currentTarget.files[0]
    // this.setState({updateBackgroundPhotoFile: file})
    this.setState({updateBackgroundPhotoFile: e.currentTarget.files[0]});

    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({ backgroundPhotoUrl: reader.result, updateBackgroundPhotoFile: file });

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({backgroundPhotoUrl: "", updateBackgroundPhotoFile: null });
    }
    
  }

  profilePicFilePreview() {
    if (this.state.profilePhotoUrl) {
      // const reader = new FileReader();
      // const file = this.state.updateProfilePhotoFile
      // reader.readAsDataURL(file)
      return (
        <img className='update-form-profile-photo' src={`${this.state.profilePhotoUrl}`}/>
      )
    } else {
      return (
        <img className='update-form-profile-photo' src={`${this.props.user.profilePhoto.imageUrl}`}/>
      )
    }
  }

  backgroundPhotoFilePreview() {
    if (this.state.backgroundPhotoUrl) {
      // const reader = new FileReader();
      // const file = this.state.updateBackgroundPhotoFile
      return (
        <img className='update-background-photo' src={`${this.state.backgroundPhotoUrl}`}/>
      )
    } else {
      return (
        <img className='update-background-photo' src={`${this.props.user.backgroundPhoto.imageUrl}`}></img>
      )
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.setStateOfParent(false);
    this.props.updateUser(this.state.user);
    
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
      })
      .then(this.props.forceProfileRender())
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
      })
      .then(this.props.forceProfileRender())
    }
  }

  render() {
    
    return (
      <div className='session-form-background'>
      <div className='update-form-container'>
          <h3 className='update-profile'>Profile</h3>
        <div className='centering-div'>

         
      <form className ='update-form' onSubmit={this.handleSubmit}>
        <div className='update-photos'>
          {this.profilePicFilePreview()}
          {/* <img className='update-form-profile-photo' src={`${this.props.user.profilePhoto.imageUrl}`}/> */}
          <label className='bio-img-select'> <i className='fa fa-camera' style={{fontSize: 24 }}></i>
            <input type="file" onChange={this.handleProfileFile} />
          </label>
          {this.backgroundPhotoFilePreview()}
          {/* <img className='update-background-photo' src={`${this.props.user.backgroundPhoto.imageUrl}`}></img> */}
          <label className='bio-img-select'> <i className='fa fa-camera' style={{fontSize: 24 }}></i>
            <input type="file" onChange={this.handleBackgroundFile}/>
          </label>
        </div>

        <div className='update-info'>
          <label> Bio </label>
          {/* <label> */}
            <textarea className='update-bio' type='text' value={this.state.user.bio} rows='10'
            // value={this.defaultValue(this.state.user.bio)} 
            onChange={this.update('bio')}/>
          {/* </label> */}

          <label>Birthday </label>
            <input type="date" value={this.state.user.birthday}
            // {this.defaultValue(this.state.user.birthday)} 
            onChange={this.update('birthday')} />

          <label>Gender/Pronouns
            <input type="text" value={this.state.user.gender}
            // {this.defaultValue(this.state.user.gender)} 
            onChange={this.update('gender')} />
          </label>

          <label>RelationshipStatus 

            {/* <input type="text" value={this.state.user.relationshipStatus} */}
            {/* // value={this.defaultValue(this.state.user.relationshipStatus)} */}
             {/* onChange={this.update('relationshipStatus')} /> */}
             <select className='select-relationship-status' onChange={this.update('relationship-status')} >
            {/* //  name="relationship-status" id="relationship-status"> */}
                <option value="Single" onChange={this.update('relationship-status')}>Single</option>
                <option value="Married" onChange={this.update('relationship-status')}>Married</option>
                <option value="In a Relationship" onChange={this.update('relationship-status')}>In a Relationship</option>
                <option value="Its Complicated" onChange={this.update('relationship-status')}>Its Complicated</option>
              </select>
          </label>
        </div>
          <button className='update-bio-button'>Update Bio</button>
        </form>
        </div>
      </div>
    </div>
    )
  }
}

export default UpdateForm