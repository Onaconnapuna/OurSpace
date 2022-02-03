import React from 'react'; 
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password2: '',
      firstName: '',
      lastName: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderError = this.renderError.bind(this);
    this.renderErrorHelper = this.renderErrorHelper.bind(this);
    this.passwordsDontMatchError = this.passwordsDontMatchError.bind(this);
    this.checkValidForm = this.checkValidForm.bind(this);
  }



  update(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    })
  }

  checkValidForm() {
    if (this.state.password !== this.state.password2) {
      return false
    }
    if (this.state.email === '' || this.state.password === '' || this.state.firstName === '' || this.state.lastName === '') {
      return false
    } else {
      return true 
    }
  }

  checkValidLogIn() {
    if (this.state.email === '' || this.state.password === '') {
      return false 
    } else { 
      return true
    }
  } 
  renderErrorHelper(string) {
    for(let i = 0; i < this.props.errors.length; i++) {
      if (this.props.errors[i].toLowerCase().includes(string)) {
        return this.props.errors[i]
      }
    }
  }

  passwordsDontMatchError() {
    if (this.state.password !== this.state.password2) {
      return (
        <div className='error'>Passwords don't match</div>
      )
    }
  }

  renderError(string) {
    return (
      <div className='error'> {this.renderErrorHelper(string)} </div>
    )
  }

  renderAllErrors() {
    return(
      <div className='session-form-errors'>
        {this.props.errors.map((error, i) => (
          <div key={`error-${i}`} className='error'>
            {error}
          </div>
        ))}
      </div> 
    )
  }

  componentWillUnmount() {
    this.props.removeErrors()
  }

  demoSignUp() {
    const user = {
      email: 'demouser@demo.com',
      password: 'password'
    }
    this.props.demoForm(user)
    this.props.switchModals(false, false)
  
    setTimeout( () => {
      this.props.history.push(`/main`)
    }, 1500)
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user).then(this.props.removeErrors());
    console.log(this.props.errors)
    setTimeout( () => {
      if (this.props.errors == false) {
        this.props.switchModals(false, false);
        // console.log(this.props.history)
        this.props.history.push(`/main`)
      } 
    }, 3000);
  }

  handleLogIn() {
    return (
      <form onSubmit={this.handleSubmit} className='session-form'>
          <div className='session-form-heading'>
            <h3>Welcome to Ourspace</h3>
            <br />
            <h4>Log In</h4>
            <br />
            {this.renderAllErrors()}
          </div>
          <label className='session-input'>Email
            <input type="text" value={this.state.email} onChange={this.update('email')}/>
          </label>
            <br />
          <label className='session-input'>Password
            <input type="password" value={this.state.password} onChange={this.update('password')}/>
          </label>
          <br />
          <div className='session-form-buttons'>
            <button className='session-button' disabled={!this.checkValidLogIn()}>Log In</button>
          </div>
          <div className='navlink-container'>
            <p>Don't have an account? </p>
            <button className='switch-forms' onClick={ ()=> this.props.switchModals(true, false)}>Sign Up Instead</button>
            </div>
        </form>
    )
  }

  handleSignUp() {
    return (  
        <form onSubmit={this.handleSubmit} className='session-form'>
          <div className='session-form-heading'>
            <h3>Welcome to Ourspace</h3>
            <br />
            <h4>Create an Account</h4>
          </div>
          <label>Email
            <input type="text" value={this.state.email} onChange={this.update('email')} className='session-input'/>
          </label>
            {this.renderError('email')}
          <label>Password
            <input type="password" value={this.state.password} onChange={this.update('password')} className='session-input' />
          </label>
          {this.renderError('password')}
          <label>Password
            <input type="password" value={this.state.password2} onChange={this.update('password2')} className='session-input' />
          </label>
          {this.passwordsDontMatchError()}
          <label>First Name
            <input type="text" value={this.state.firstName} onChange={this.update('firstName')} className='session-input'/>
          </label>
          {this.renderError('first name')}
          
          <label>Last Name
            <input type="text" value={this.state.lastName} onChange={this.update('lastName')} className='session-input'/>
          </label>  
          {this.renderError('last name')}
          <br />
          <div className='session-form-buttons'>
            <button className='session-button' disabled={!this.checkValidForm()}>Sign Up</button>
          </div>
          <div className='navlink-container'>
            <p>Already have an account? </p>
            <button className='switch-forms' onClick={ ()=> this.props.switchModals(false, true)}>Log In Instead</button>
          </div>
        </form>
    )
  }

  render() {
    return (
        <div className='session-form-container'>
          {
            this.props.formType === 'signup' ? this.handleSignUp() : this.handleLogIn()
          }
            <button className='demo-button' onClick={ () => {this.demoSignUp()}}>Demo</button>

        </div>
    )
  }   
}

export default withRouter(SessionForm)

