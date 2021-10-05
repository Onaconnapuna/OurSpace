import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post_actions';
import { fetchUser } from '../../actions/users_actions';
import UsersProfile from './users_profile';


const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId],
    posts: Object.values(state.entities.posts)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchPosts: (userId) => dispatch(fetchPosts(userId)),
    deletePost: (postId) => dispatch(deletePost(postId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersProfile)