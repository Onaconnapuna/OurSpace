  import {connect} from 'react-redux';
  import PostItem from './post_item';
  import { fetchComments } from '../../actions/comment_actions'
  
  const mapStateToProps = (state) => {
    
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchComments: (postId) => dispatch(fetchComments(postId))
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(PostItem)