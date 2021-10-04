import { connect } from 'react-redux';
import { fetchPosts, deletePost, removePosts } from '../../actions/post_actions';
import MainPage from './main_page';


const mapStateToProps = (state) => {
  return {
    posts: Object.values(state.entities.posts),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    deletePost: (postId) => dispatch(deletePost(postId)),
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)