import { connect } from 'react-redux';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import { fetchFriendships, deleteFriendship } from '../../actions/friendship_actions';
import { fetchUser } from '../../actions/users_actions';
import UsersProfile from './users_profile';


const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId],
    friendships: state.entities.friendships[ownProps.match.params.userId],
    posts: Object.values(state.entities.posts),
    currentUserId: state.session.currentUser.id,
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFriendships: (userId) => dispatch((fetchFriendships(userId))),
    deleteFriendship: (friendshipId) => dispatch((deleteFriendship(friendshipId))),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchPosts: (userId) => dispatch(fetchPosts(userId)),
    deletePost: (postId) => dispatch(deletePost(postId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersProfile)