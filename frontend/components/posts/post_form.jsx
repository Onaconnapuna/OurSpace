import React from 'react';
import Modal from 'react-modal';
import { fetchPosts } from '../../util/posts_api_util';

class PostFrom extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      post: {
        userId: this.props.user.id,
        posterId: this.props.posterId,
        body: '',
      },
      photoFile: null,
      modalIsOpen: false 
    }

    Modal.setAppElement('#root')

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  update(field) {
    return (e) => {
      let post = {...this.state.post}
      post[field] = e.currentTarget.value
      this.setState({post})
    }
  }

  handleFile(e) {
    this.setState({photoFile: e.currentTarget.files[0]});
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('post[userId]', this.state.post.userId);
    formData.append('post[posterId]', this.state.post.posterId);
    formData.append('post[body]', this.state.post.body);
    if (this.state.photoFile) {
      formData.append('post[photo]', this.state.photoFile);
    }
    this.props.action(formData).then(this.setState({modalIsOpen:false}))
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
            <textarea value = {this.state.post.body} onChange={this.update('body')} cols="30" rows="10"></textarea>  
            <input type='file' onChange={this.handleFile}/>
            <button>{this.props.formType}</button>
        </form>
        </Modal>

        <div className='whats-on-your-mind'>
          <button onClick={() => this.setState({modalIsOpen: true})}>Whats on your mind?</button>
        </div>
      </div>
    )
  }
}

export default PostFrom