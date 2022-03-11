import {connect} from 'react-redux';
import PostItem from './post';
import { fetchComments, deleteComment, createComment } from '../../actions/comment_actions'
import { deletePost } from '../../actions/post_actions';
import { createLike, deleteLike } from '../../actions/like_actions';
  
  const mapStateToProps = (state) => ({
    // comments: Object.keys(state.entities.comments).map((key) => [Number(key), state.entities.comments[key]])
    comments: Object.entries(state.entities.comments)
  })

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchComments: (postId) => dispatch(fetchComments(postId)),
      deletePost: (postId)=> dispatch(deletePost(postId)),
      deleteComment: (commentId) => dispatch(deleteComment(commentId)),
      createComment: (comment) => dispatch(createComment(comment)),
      createLike: (like) => dispatch(createLike(like)),
      deleteLike: (likeId) => dispatch(deleteLike(likeId))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(PostItem)
