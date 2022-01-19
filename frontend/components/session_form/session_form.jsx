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
    this.renderError = this.renderError.bind(this);
    this.renderErrorHelper = this.renderErrorHelper.bind(this)
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    })
  }

  renderErrorHelper(string) {
    for(let i = 0; i < this.props.errors.length; i++) {
      if (this.props.errors[i].toLowerCase().includes(string)) {
        return this.props.errors[i]
      }
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
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user)
    setTimeout( () => {
      if (this.props.errors == false) {
        this.props.switchModals(false, false)
      } 
    }, 750)
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
            <button className='session-button'>Log In</button>
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
          <br />
          <label>Email
            <input type="text" value={this.state.email} onChange={this.update('email')} className='session-input'/>
          </label>
            {this.renderError('email')}
            <br />
          <label>Password
            <input type="password" value={this.state.password} onChange={this.update('password')} className='session-input' />
          </label>
          {this.renderError('password')}
            <br />
          <label>First Name
            <input type="text" value={this.state.firstName} onChange={this.update('firstName')} className='session-input'/>
          </label>
          {this.renderError('first name')}
            <br />
          <label>Last Name
            <input type="text" value={this.state.lastName} onChange={this.update('lastName')} className='session-input'/>
          </label>  
          {this.renderError('last name')}
          <br />
          <div className='session-form-buttons'>
            <button className='session-button'>Sign Up</button>
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

export default SessionForm

