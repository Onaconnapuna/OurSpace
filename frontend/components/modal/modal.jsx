import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import UpdateBioContainer from '../bio/update_bio_container';

class Modal extends React.Component {
  constructor(props){
    super(props)

    // let user = this.props.user

    this.modalType = this.modalType.bind(this)
  }

  componentDidMount() {
    console.log(this.props)
  }

  modalType = () => {
    console.log(this.props)
    if (!this.props.modal) {
      return null;
    }
    let component;
    switch (this.props.modal) {
      case 'login':
        component = <LoginFormContainer />;
        return component;
        break;
      case'signup':
        component = <SignupFormContainer />;
        return component;
        break;
      case  'updateBio':
        console.log(this.props)
        component = <UpdateBioContainer />;
        return component;
      default:
        return null;
    }
  }
  render() {
    if (this.props.modal == null) {
      return null
    } else  {
      console.log(this.props)
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