import React from 'react'
import Modal from 'react-modal'

class UpdateForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.props.user

    this.handleSubmit=this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.fetchUser(this.state.id)
  }

  componentWillUnmount(){
    this.props.fetchUser(this.state.id)
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.setStateOfParent(false)
    this.props.updateUser(this.state)
    this.props.fetchUser(this.state.id)
  }

  render() {

    return (
    <div className='session-form-background'>
      <div className='form-container'>
        <form className ='session-form' onSubmit={this.handleSubmit}>
         
          <h3>Profile</h3>
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