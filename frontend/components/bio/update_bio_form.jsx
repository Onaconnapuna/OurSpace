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
      disabled: false
     }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleProfileFile = this.handleProfileFile.bind(this)
    this.handleBackgroundFile = this.handleBackgroundFile.bind(this)
    this.profilePicFilePreview = this.profilePicFilePreview.bind(this)
    this.backgroundPhotoFilePreview = this.backgroundPhotoFilePreview.bind(this)
    this.handleFileSize= this.handleFileSize.bind(this)
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
    e.preventDefault();
    this.setState({updateProfilePhotoFile: e.currentTarget.files[0]})
    const reader = new FileReader()
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({ profilePhotoUrl: reader.result, updateProfilephotoFile: file });

      if (file.size > 500000) {
        this.setState({disabled: true})
      } else {
        this.setState({disabled: false})
      }

      if (file) {
        reader.readAsDataURL(file);
      } else {
        this.setState({ profilePhotoUrl: "", updateProfilePhotoFile: null });
      }
  }

  handleBackgroundFile(e) {
    e.preventDefault();
    this.setState({updateBackgroundPhotoFile: e.currentTarget.files[0]});

    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({ backgroundPhotoUrl: reader.result, updateBackgroundPhotoFile: file });

    if (file.size > 500000) {
      this.setState({disabled: true})
    } else {
      this.setState({disabled: false})
    }

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({backgroundPhotoUrl: "", updateBackgroundPhotoFile: null });
    }
    
  }

  profilePicFilePreview() {
    if (this.state.profilePhotoUrl) {
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
      return (
        <img className='update-background-photo' src={`${this.state.backgroundPhotoUrl}`}/>
      )
    } else {
      return (
        <img className='update-background-photo' src={`${this.props.user.backgroundPhoto.imageUrl}`}></img>
      )
    }
  }

  getData(url, formData) {
    return  $.ajax({
      url: url,
      method: 'PUT',
      data: formData,
      contentType: false,
      processData: false
    })
  }

  async awaitUpload(url, formData) {
    try {
      const res = await this.getData(url, formData)
      if (res) {
        this.props.forceProfileRender()
      }
    } catch(err) {
      console.log(err);
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
  
      this.awaitUpload(`/api/users/${this.props.user.id}/profile_photos/${this.props.user.profilePhoto.id}`, formData)
    }
    
    if (this.state.updateBackgroundPhotoFile) {
      const backgroundFormData = new FormData();
      backgroundFormData.append('background_photo[photo]', this.state.updateBackgroundPhotoFile),
      backgroundFormData.append('background_photo[user_id]', this.state.user.id)
  
      this.awaitUpload(`/api/users/${this.props.user.id}/background_photos/${this.props.user.backgroundPhoto.id}`, backgroundFormData) 
    }
  }

  handleFileSize() {
    if (this.state.disabled) {
        return (
          <div className='error'> One or both of these files are too large, please select another </div>
        )
    }
  }

  render() {
    
    return (
      <div className='update-bio-form-background'>
      <div className='update-form-container'>
          <h3 className='update-profile'>Profile</h3>
        <div className='centering-div'>

         
      <form className ='update-form' onSubmit={this.handleSubmit}>
        <div className='update-photos'>
          {this.profilePicFilePreview()}
          <label className='bio-img-select'> <i className='fa fa-camera' style={{fontSize: 24 }}></i>
            <input type="file" onChange={this.handleProfileFile} />
          </label>
          {this.backgroundPhotoFilePreview()}
          <label className='bio-img-select'> <i className='fa fa-camera' style={{fontSize: 24 }}></i>
            <input type="file" onChange={this.handleBackgroundFile}/>
          </label>
         {this.handleFileSize()}
        </div>

        <div className='update-info'>
          <label> Bio </label>
            <textarea className='update-bio' type='text' value={this.state.user.bio} rows='10'
            onChange={this.update('bio')}/>

          <label>Birthday </label>
            <input type="date" value={this.state.user.birthday}
            onChange={this.update('birthday')} />

          <label>Gender/Pronouns
            <input type="text" value={this.state.user.gender} 
            onChange={this.update('gender')} />
          </label>

          <label>Relationship Status 
             <select className='select-relationship-status' 
              onChange={this.update('relationship-status')} 
              >
            <optgroup label="Relationship Status">
                <option value="Withold" onClick={this.update('relationship-status')}>Withold</option>
                <option value="Single" onClick={this.update('relationship-status')}>Single</option>
                <option value="Married" onClick={this.update('relationship-status')}>Married</option>
                <option value="In a Relationship" onClick={this.update('relationship-status')}>In a Relationship</option>
                <option value="Its Complicated" onClick={this.update('relationship-status')}>Its Complicated</option>
            </optgroup>
              </select>
          </label>
        </div>
          <button className='update-bio-button' disabled={this.state.disabled}>Update Bio</button>
        </form>
        </div>
      </div>
    </div>
    )
  }
}

export default UpdateForm