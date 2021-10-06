import React from 'react'

class PostFrom extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.props.post;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState( {[field]: e.target.value} )
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state)
  }

  render() {
    return(
      <div className='post-form-container'>
        <h3>Whats on your mind?</h3>
        <form onSubmit={this.handleSubmit}>  
          <textarea value = {this.state.body} onChange={this.update('body')}cols="30" rows="10"></textarea>
          <button>{this.props.formType}</button>
        </form>
      </div>
    )
  }
}

export default PostFrom