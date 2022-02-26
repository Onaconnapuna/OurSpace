import {connect} from 'react-redux';
import PostItem from './post';
import { fetchComments, deleteComment, createComment } from '../../actions/comment_actions'
import { deletePost } from '../../actions/post_actions';
  
  const mapStateToProps = (state) => {
    return {
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      deletePost: (postId)=> dispatch(deletePost(postId)),
      deleteComment: (commentId) => dispatch(deleteComment(commentId)),
      createComment: (comment) => dispatch(createComment(comment))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(PostItem)
