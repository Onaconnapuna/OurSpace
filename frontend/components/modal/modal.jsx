import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import UpdateBioContainer from '../bio/update_bio_container';
import UpdateUserProfileContainer  from '../profile_page/update_profile_container';
import PostFormContainer from '../posts/post_form_container';

class Modal extends React.Component {
  constructor(props){
    super(props)

    this.modalType = this.modalType.bind(this)
  }

  modalType = () => {
    if (!this.props.modal) {
      return null;
    }
    let component;
    switch (this.props.modal) {
      case 'login':
        component = <LoginFormContainer />;
        return component;
      case'signup':
        component = <SignupFormContainer />;
        return component;
      case  'updateBio':
        component = <UpdateBioContainer />;
        return component;
      case 'editProfile':
        component = <UpdateUserProfileContainer/>;
        return component;
      case 'createPost':
        component = <PostFormContainer userId={this.props.userId}/>;
        return component;
      default:
        return null;
    }
  }
  render() {
    if (this.props.modal == null) {
      return null
    } else  {
      return ( 
        <div className="modal-background" onClick={ () => this.props.closeModal()}>
          <div className="modal-child" onClick={e => e.stopPropagation()}>
            { this.modalType() }
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal,
  
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);