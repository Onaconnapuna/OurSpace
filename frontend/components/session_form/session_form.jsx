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

  renderErrors() {
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
    if (!this.props.errors) {
      this.setState({modalIsOpen: false})
    }
  }

  handleLogIn() {
    return (
        <form onSubmit={this.handleSubmit} className='session-form'>
          <h3>Welcome to Ourspace</h3>
          <h4>Log In</h4>
          <br />
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
            {/* <button className='session-button' onClick={ (e) => {this.demoSignUp()}}>Demo</button> */}
          </div>
          <div className='navlink-container'>
            <button onClick={ ()=> this.props.switchModals(true, false)}>Sign Up Instead</button>
            </div>
          <div className='errors-container'>
            <br />
            {this.renderErrors()}
          </div>
        </form>
    )
  }

  handleSignUp() {
    return (  
        <form onSubmit={this.handleSubmit} className='session-form'>
          <h3>Welcome to Ourspace</h3>
          <h4>Create an Account</h4>
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
          <div className='session-form-buttons'>
            <button className='session-button'>Sign Up</button>
            {/* <button className='session-button' onClick={ (e) => {this.demoSignUp()}}>Demo</button> */}
          </div>
          <div className='navlink-container'>
            <button onClick={ ()=> this.props.switchModals(false, true)}>Log In Instead</button>
          </div>
          <div className='errors-container'>
            <br />
            {this.renderErrors()}
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

