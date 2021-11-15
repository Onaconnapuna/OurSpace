import React from 'react'
import Modal from 'react-modal'

class UpdateForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.props.user

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFile = this.handleFile.bind(this)
  }
  
  componentDidMount() {
    this.props.fetchUser(this.state.id)
    this.setState({photoFile: null})
  }

  componentWillUnmount(){
    this.props.fetchUser(this.state.id)
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    })
  }

  handleFile(e) {
    this.setState({photoFile: e.currentTarget.files[0]});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.setStateOfParent(false)

    const formData = new FormData();
    formData.append('user[id]', this.state.id)
    formData.append('user[email]', this.state.email)
    formData.append('user[firstName]', this.state.firstName);
    formData.append('user[lastName]', this.state.lastName);
    formData.append('user[bio]', this.state.bio);
    formData.append('user[birthday]', this.state.birthday);
    formData.append('user[gender]', this.state.gender);
    formData.append('user[relationshipStatus]', this.state.relationshipStatus);
    if (this.state.photoFile) {
      formData.append('user[photo]', this.state.photoFile);
    }
    $.ajax({
      url: `/api/users/${this.state.id}`,
      method: 'PATCH',
      data: formData,
      contentType: false,
      processData: false
    });
  }

  render() {

    return (
    <div className='session-form-background'>
      <div className='form-container'>
        <form className ='session-form' onSubmit={this.handleSubmit}>
         
          <h3>Profile</h3>

          <label>Profile Picture
            <input type="file" onChange={this.handleFile} />
          </label>

          <label>Bio
            <input type='text' value={this.state.bio} onChange={this.update('bio')}/>
          </label>

          <label>Birthday
            <input type="text" value={this.state.birthday} onChange={this.update('birthday')} />
          </label>

          <label>Gender/Pronouns
            <input type="text" value={this.state.gender} onChange={this.update('gender')} />
          </label>

          <label>RelationshipStatus
            <input type="text" value={this.state.relationshipStatus} onChange={this.update('relationshipStatus')} />
          </label>
          <button>Update Bio</button>
        </form>
      </div>
    </div>
    )
  }
}

export default UpdateForm