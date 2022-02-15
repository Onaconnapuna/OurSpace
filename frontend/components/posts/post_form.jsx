import React from 'react';
import Modal from 'react-modal';

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

    // ref = React.createRef();

    // getModalParent = () =>  this.ref.current;
    // Modal.setAppElement('#root')

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
    this.props.createPost(formData).then(this.setState({modalIsOpen:false})).then(this.props.forceProfileRender())
  }

  render() {
    return(
      <div className='whats-on-your-mind-container'>
       <Modal
        parentSelector={ () => document.body}
        isOpen={this.state.modalIsOpen}
        overlayClassName='modal-background'
        className='modal-child'
        onRequestClose={() => this.setState({modalIsOpen: false})}
        >
        <div className='post-form-container'>
        <form className='post-form' onSubmit={this.handleSubmit}>
            <h3 className='create-post'> Create Post </h3>
            <div className='create-post-poster-id'>
              <img className='create-post-poster-img' src={`${this.props.currentUser.profilePhoto.imageUrl}`} />
              <p className='poster-name'>
                {this.props.currentUser.firstName} {this.props.currentUser.lastName}
              </p>
            </div>
            <textarea className='create-post-body' value = {this.state.post.body} placeholder="What's on your mind?" onChange={this.update('body')} cols="30" rows="10"></textarea>  
            <input type='file' onChange={this.handleFile}/>
            <button>{this.props.formType}</button>
        </form>
        </div>
        </Modal> 

        <div className='whats-on-your-mind'>
            <img src={`${this.props.user.profilePhoto.imageUrl}`}/>
            <button onClick={() => this.setState({modalIsOpen: true})}>What's on your mind?</button>
        </div>
      </div>
    )
  }
}

export default PostFrom