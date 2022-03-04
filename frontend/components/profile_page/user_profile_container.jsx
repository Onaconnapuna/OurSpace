import { connect } from 'react-redux';
import { fetchUser } from '../../actions/users_actions';
import UsersProfile from './users_profile';
import { fetchCurrentUser} from '../../actions/users_actions'
import { fetchFriendRequests } from '../../actions/friend_request_actions';
import { fetchPosts } from '../../actions/post_actions';
import { fetchFriendships } from '../../actions/friendship_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId],
    currentUser: state.session.currentUser,
    posts: state.entities.posts,
    friends: Object.values(state.entities.friendships),
    friendRequests: Object.values(state.entities.notifications)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: (userId) => dispatch(fetchPosts(userId)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchCurrentUser: (userId) => dispatch(fetchCurrentUser(userId)),
    fetchFriendRequests:(userId) => dispatch(fetchFriendRequests(userId)),
    fetchFriendships:(userId) => dispatch(fetchFriendships(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersProfile)