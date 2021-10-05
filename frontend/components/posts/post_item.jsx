import React from 'react'

class PostItem extends React.Component{
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className='post'>
        {this.props.post.body}
      </div>
    )
  }
}
  
export default PostItem