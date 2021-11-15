import React from 'react';

class UpdateUserProfile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.user.id,
      email: this.props.user.email,
      firstName: this.props.user.firstName,
      lastName: this.props.user.lastName,
      bio: this.props.user.bio,
      birthday: this.props.user.birthday,
      gender: this.props.user.gender,
      relationshipStatus: this.props.user.relationshipStatus,
      photoFile: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);

  }

  update(field) {
    return (e) => {
      this.setState( {[field]: e.target.value} )
    }
  }

  handleFile(e) {
    this.setState({photoFile: e.currentTarget.files[0]});
  }

  handleSubmit(e) {
    e.preventDefault();
    const userUpdate = new FormData();
    userUpdate.append('user[id]', this.state.id)
    userUpdate.append('user[email]', this.state.email)
    userUpdate.append('user[firstName]', this.state.firstName);
    userUpdate.append('user[lastName]', this.state.lastName);
    userUpdate.append('user[bio]', this.state.bio);
    userUpdate.append('user[birthday]', this.state.birthday);
    userUpdate.append('user[gender]', this.state.gender);
    userUpdate.append('user[relationshipStatus]', this.state.relationshipStatus);
    if (this.state.photoFile) {
      userUpdate.append('user[photo]', this.state.photoFile);
    }
    this.props.updateUser(userUpdate);
  }



  render() {
    return(
      <div className='session-form-background'>
        <div className='form-container'>
        <form className='session-form'onSubmit={this.handleSubmit}>
          <h3>Edit Profile</h3>
          <label>Profile Picture
            <input type="file" onChange={this.handleFile} />
          </label>

          <label>First Name
            <input type="text" value={this.state.firstName}  onChange={this.update('firstName')} />
          </label>

          <label>Last Name
            <input type="text" value={this.state.lastName}  onChange={this.update('lastName')}/>
          </label>

          <label>Bio
            <input type="text" value={this.state.bio}  onChange={this.update('bio')} />
          </label>

          <label>Birthday
            <input type="text" value={this.state.birthday} onChange={this.update('birthday')}/>
          </label>

          <label>Gender
            <input type="text" value={this.state.gender}  onChange={this.update('gender')} />
          </label>

          <label>Relationship Status
            <input type="text" value={this.state.relationshipStatus} onChange={this.update('relationshipStatus')}/>
          </label>
          <button> Finish </button>
        </form>
        </div>
      </div>
    )
  }
}

export default UpdateUserProfile