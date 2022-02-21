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
      imageUrl: "",
      modalIsOpen: false,

    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.filePreview = this.filePreview.bind(this);
    // this.disableButton = this.disableButton.bind(this);
    this.fileError = this.fileError.bind(this)
  }

  update(field) {
    return (e) => {
      let post = {...this.state.post}
      post[field] = e.currentTarget.value
      this.setState({post})
    }
  }

  filePreview() {
    if (this.state.imageUrl) {
      return (
        <img className='post-img-preview' src={`${this.state.imageUrl}`}></img>
      )
    }
  }

  fileError() {
    if (this.state.photoFile && this.state.photoFile.size > 300000) {
      return (
        <div className='file-error'> File is too large, please select another </div>
      )
    }
  }

  handleFile(e) {
    this.setState({photoFile: e.currentTarget.files[0]});

    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({ imageUrl: reader.result, photoFile: file });

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", photoFile: null });
    }
    
  }

  // disableButton() {
  //   if ((this.state.photoFile && this.state.photoFile.size > 300000) || !this.state.post.body) {
  //     return (
  //       <button className='create-post-button' disabled={true}>Create Post</button>
  //     )
  //   } else {
  //     return (
  //       <button className='create-post-button' disabled={false}>Create Post</button>
  //     )
  //   }
  // }

  forceRender() {
    this.setState({modalIsOpen: false})
    this.props.fetchPosts(this.props.user.id)
    this.props.forceProfileRender()
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.photoFile) {
      const formData = new FormData();
      formData.append('post[userId]', this.state.post.userId);
      formData.append('post[posterId]', this.state.post.posterId);
      formData.append('post[body]', this.state.post.body);
      formData.append('post[photo]', this.state.photoFile);
      $.ajax({
        url: '/api/posts',
        method: 'POST',
        data: formData,
        contentType: false,
        processData: false
      }).then(this.forceRender())
    } else {
    this.props.createPost(this.state.post).then(this.setState({modalIsOpen:false}))
    .then(this.props.forceProfileRender())
    }
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
            <label className='post-img-select'> <i className='fa fa-camera' style={{fontSize: 24 }}></i>
              <input type='file' onChange={this.handleFile}/>
            </label>
            </div>
            <textarea className='create-post-body' value = {this.state.post.body} placeholder="What's on your mind?" rows="5" onChange={this.update('body')}></textarea>  
            {this.filePreview()}
            {this.fileError()}
            {/* {this.disableButton()} */}
        </form>
        </div>
        </Modal> 

        <div className='whats-on-your-mind'>
            <img src={`${this.props.user.profilePhoto.imageUrl}`}/>
            {this.disableButton}
            <button onClick={() => this.setState({modalIsOpen: true})}>What's on your mind?</button>
        </div>
      </div>
    )
  }
}

export default PostFrom