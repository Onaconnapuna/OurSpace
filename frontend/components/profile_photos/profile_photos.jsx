import React from 'react'

class ProfilePhotos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      profilePhoto: this.props.user.profilePhoto.imageUrl,
      backgroundPhoto: this.props.user.backgroundPhoto.imageUrl,
      isMounted: false
    }
  }

  // componentWillUnmount() {
  //   this.setState = (state, callback) => {
  //     return;
  //   }
  // }

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