import { connect } from 'react-redux';
import { fetchPosts, deletePost, removePosts } from '../../actions/post_actions';
import { fetchCurrentUser } from '../../actions/users_actions';
import { fetchFriendRequests } from '../../actions/friend_request_actions';
import MainPage from './main_page';


const mapStateToProps = (state) => {
  return {
    // posts: Object.values(state.entities.posts),
    currentUser: state.session.currentUser,
    friendRequests: Object.values(state.entities.notifications)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCurrentUser: (userId) => dispatch(fetchCurrentUser(userId)),
    fetchFriendRequests: (userId) => dispatch(fetchFriendRequests(userId)),
    fetchPosts: (userId) => dispatch(fetchPosts(userId)),
    deletePost: (postId) => dispatch(deletePost(postId)),
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)