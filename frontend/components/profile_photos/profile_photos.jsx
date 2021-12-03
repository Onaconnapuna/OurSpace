import React from 'react'

class ProfilePhotos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      profilePhoto: this.props.user.profilePhoto.imageUrl,
      profilePhotoHash: null,
      backgroundPhoto: this.props.user.backgroundPhoto.imageUrl,
      backgroundPhotoHash: null,
    }
  }

  componentDidMount(){
    console.log('I rerenderd')
    
    setTimeout(() => {
      this.props.fetchUser(this.props.user.id)
    }, 500);

    setTimeout(() => {
      console.log(this.props.user)
      this.setState({
        profilePhoto: this.props.user.profilePhoto.imageUrl
      })
    }, 1000);
  }

  componentDidUpdate() {
    // this.setState({
    //   profilePhoto: this.props.user.profilePhoto.imageUrl
    // })
  }

  render() { 
    return(
    <div className='profile-photos-container'>
      <div className='profile-background-photo'>
        <img key={Date.now()} className='background-photos' src={`${this.state.backgroundPhoto}?${this.state.backgroundPhotoHash}`}/>
      </div>
      <div className='profile-photo'>
        <img key={Date.now()} className='profile-photos' src={`${this.state.profilePhoto}?${this.state.profilePhotoHash}`}/>
      </div>
    </div>
    )
  }}


export default ProfilePhotos