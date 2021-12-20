import { connect } from 'react-redux';
import PostsIndex from './posts_index';
import { fetchPosts } from '../../actions/post_actions';
import { fetchUser } from '../../actions/users_actions';

const mapStateToProps = state => ({
  posts: Object.values(state.entities.posts)
})

const mapDispatchToProps = dispatch => ({
  fetchPosts: (userId) => dispatch(fetchPosts(userId)),
  fetchUser: (userId) => dispatch(fetchUser(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex)