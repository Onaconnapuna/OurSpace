import { connect } from 'react-redux';
import RecommendedFriends from './recommended_friends'
import { fetchFriendships, deleteFriendship } from '../../actions/friendship_actions';
import { fetchUser } from '../../actions/users_actions'

const mapStateToProps = state => ({
  friendships: Object.values(state.entities.friendships),
  recommendedFriends: Object.values(state.entities.recommendedFriends)
})

const mapDispatchToProps = dispatch => ({
  fetchFriendships: (userId) => dispatch(fetchFriendships(userId)),
  fetchUser: (userId) => dispatch(fetchUser(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(RecommendedFriends)