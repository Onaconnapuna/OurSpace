import React from 'react';

class Bio extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.props.user
  }

  render() {
    return(
      <div>
        <div>
          Birthday: {this.props.user.birthday} 
        </div>

        <div>
          Gender: {this.props.user.gender}
        </div>

        <div>
          Bio: {this.props.user.bio}
        </div>

        <div>
          Relationship Status: {this.props.user.relationshipStatus}
        </div>

      </div>
    )
  }
}

export default Bio