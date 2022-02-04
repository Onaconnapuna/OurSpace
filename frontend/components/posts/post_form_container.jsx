import { connect } from 'react-redux'
import PostForm from './post_form'
import { createPost, fetchPosts } from '../../actions/post_actions'

const mapStateToProps = (state) => {
  return {
    posterId: state.session.currentUser.id,
    formType: 'Create Post',
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts:(userId) => dispatch(fetchPosts(userId)),
    createPost:(post) => dispatch(createPost(post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)

