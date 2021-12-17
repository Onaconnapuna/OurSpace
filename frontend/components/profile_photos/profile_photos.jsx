import React from 'react'

class ProfilePhotos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      profilePhoto: this.props.user.profilePhoto.imageUrl,
      profilePhotoHash: Date.now(),
      backgroundPhoto: this.props.user.backgroundPhoto.imageUrl,
      backgroundPhotoHash: Date.now(),
    }
  }

 
  componentDidMount(){
    
    setTimeout(() => {
      this.props.fetchUser(this.props.user.id)
    }, 3000);

    setTimeout(() => {
      console.log(this.props.user)
      this.setState({
        profilePhoto: this.props.user.profilePhoto.imageUrl,
        backgroundPhoto: this.props.user.backgroundPhoto.imageUrl
      })
    }, 4000);
  }

  render() { 
    return(
    <div className='profile-photos-container'>
      <div className='profile-background-photo'>
        <img className='background-photos' src={`${this.state.backgroundPhoto}?${this.state.backgroundPhotoHash}`}/>
      </div>
      <div className='profile-photo'>
        <img className='profile-photos' src={`${this.state.profilePhoto}?${this.state.profilePhotoHash}`}/>
      </div>
    </div>
    )
  }}


export default ProfilePhotos