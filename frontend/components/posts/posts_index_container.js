import { connect } from 'react-redux';
import PostsIndex from './posts_index';
import { fetchPosts } from '../../actions/post_actions';
import { fetchUser } from '../../actions/users_actions';

const mapStateToProps = state => ({
  profilePosts: Object.values(state.entities.profilePosts),
  mainPosts: Object.values(state.entities.mainPosts)
})

const mapDispatchToProps = dispatch => ({
  fetchPosts: (userId) => dispatch(fetchPosts(userId)),
  fetchUser: (userId) => dispatch(fetchUser(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex)