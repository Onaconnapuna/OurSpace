import React from 'react'; 
import { Link } from 'react-router-dom'

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

  renderErrors() {
    return(
      <ul className='session-form-errors'>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`} className='error'>
            {error}
          </li>
        ))}
      </ul>
    )
  }

  demoSignUp() {
    const user = {
      email: 'demouser@demo.com',
      password: 'password'
    }
    this.props.demoForm(user)
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user)
  }

  handleLogIn() {
    return (
        <form onSubmit={this.handleSubmit} className='session-form'>
          Welcome to OurSpace
          <br />
          <label className='session-input'>Email
            <input type="text" value={this.state.email} onChange={this.update('email')}/>
          </label>
            <br />
          <label className='session-input'>Password
            <input type="password" value={this.state.password} onChange={this.update('password')}/>
          </label>
          <br />
          <button className='session-button'>Log In</button>
          <button className='session-button' onClick={ () => {this.demoSignUp()}}>Demo</button>
          {this.renderErrors()}
          {this.props.navLink}
        </form>
    )
  }

  handleSignUp() {
    return (  
        <form onSubmit={this.handleSubmit} className='session-form'>
          Welcome to OurSpace
          <br />
          <label>Email
            <input type="text" value={this.state.email} onChange={this.update('email')} className='session-input'/>
          </label>
            <br />
          <label>Password
            <input type="password" value={this.state.password} onChange={this.update('password')} className='session-input' />
          </label>
            <br />
          <label>First Name
            <input type="text" value={this.state.firstName} onChange={this.update('firstName')} className='session-input'/>
          </label>
            <br />
          <label>Last Name
            <input type="text" value={this.state.lastName} onChange={this.update('lastName')} className='session-input'/>
          </label>  
          <br />
          <button className='session-button'>Sign Up</button>
          <button className='session-button' onClick={ () => {this.demoSignUp()}}>Demo</button>
          {this.renderErrors()}
          {this.props.navLink}
        </form>
    )
  }

  render() {
    return (
    <div className='form-container'>
      {
        this.props.formType === 'signup' ? this.handleSignUp() : this.handleLogIn()
      }
    </div>
    )
  }
    
}

export default SessionForm

