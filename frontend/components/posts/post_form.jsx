import React from 'react'
import { fetchPosts } from '../../util/posts_api_util';

class PostFrom extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      userId: this.props.userId,
      posterId: this.props.posterId,
      body: '',
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
    const formData = new FormData();
    formData.append('post[userId]', this.state.userId);
    formData.append('post[posterId]', this.state.posterId);
    formData.append('post[body]', this.state.body);
    if (this.state.photoFile) {
      formData.append('post[photo]', this.state.photoFile);
    }
    
    this.props.action(formData).then(fetchPosts(userId))
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
          <h3>Whats on your mind?</h3>
          <textarea value = {this.state.body} onChange={this.update('body')} cols="30" rows="10"></textarea>  
          <input type='file' onChange={this.handleFile}/>
          <button>{this.props.formType}</button>
        </form>
    )
  }
}

export default PostFrom