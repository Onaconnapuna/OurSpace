import { connect } from 'react-redux';
import PostsIndex from './posts_index'

const mapStateToProps = state => ({
  posts: Object.values(state.entities.posts)
})

const mapDispatchToProps = dispatch => ({
  fetchPosts: (userId) => dispatch(fetchPosts(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex)