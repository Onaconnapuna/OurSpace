import React from 'react';
import Modal from 'react-modal';
import { fetchPosts } from '../../util/posts_api_util';

class PostFrom extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      userId: this.props.userId,
      posterId: this.props.posterId,
      body: '',
      photoFile: null,
      modalIsOpen: false 
    }

    Modal.setAppElement('#root')

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
      <div className='post-form-container'>
        <Modal
        isOpen={this.state.modalIsOpen}
        overlayClassName='modal-background'
        className='modal-child'
        onRequestClose={() => this.setState({modalIsOpen: false})}
        >
        <form className='post-form' onSubmit={this.handleSubmit}>
            <h3>Whats on your mind? </h3>
            <textarea value = {this.state.body} onChange={this.update('body')} cols="30" rows="10"></textarea>  
            <input type='file' onChange={this.handleFile}/>
            <button>{this.props.formType}</button>
        </form>
        </Modal>

        <div className='whats-on-your-mind'>
          {/* <img src="" /> */}
          <button onClick={() => this.setState({modalIsOpen: true})}>Whats on your mind?</button>
        </div>
      </div>
    )
  }
}

export default PostFrom