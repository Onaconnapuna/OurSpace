import { connect } from 'react-redux'
import PostForm from './post_form'
import { createPost } from '../../actions/post_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    post: {
      user_id: 56,
      poster_id: state.session.currentUser.id,
      body: '',
    },
    formType: 'Create Post'
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    action:(post) => dispatch(createPost(post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)