import React from 'react'; 

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user)
  }

  handleLogIn() {
    return (
        <form onSubmit={this.handleSubmit}>
          Welcome to OurSpace
          <br />
          <label>Email
            <input type="text" value={this.state.email} onChange={this.update('email')}/>
          </label>
            <br />
          <label>Password
            <input type="password" value={this.state.password} onChange={this.update('password')} />
          </label>
          <button>Log In</button>
        </form>
    )
  }

  handleSignUp() {
    return (  
        <form onSubmit={this.handleSubmit}>
          Welcome to OurSpace
          <br />
          <label>Email
            <input type="text" value={this.state.email} onChange={this.update('email')}/>
          </label>
            <br />
          <label>Password
            <input type="password" value={this.state.password} onChange={this.update('password')} />
          </label>
            <br />
          <label>First Name:
            <input type="text" value={this.state.firstName} onChange={this.update('firstName')}/>
          </label>
            <br />
          <label>Last Name
            <input type="text" value={this.state.lastName} onChange={this.update('lastName')}/>
          </label>  
          <button>Sign Up</button>
        </form>
    )
  }

  render() {
    return (
    <div>
      {
        this.props.formType === 'signup' ? this.handleSignUp() : this.handleLogIn()
      }
    </div>
    )
  }
    
}

export default SessionForm

