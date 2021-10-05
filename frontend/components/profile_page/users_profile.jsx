import React from 'react'
import NavBarContainer from '../nav_bar/nav_bar_container'

class UsersProfile extends React.Component {
  constructor(props) {
    super (props)
  }

  render() {
    return (
      <div>
        <NavBarContainer/>
          <h1></h1>
          <div>
            Friends List 
          </div>
      </div>
    )
  }
}

export default UsersProfile

