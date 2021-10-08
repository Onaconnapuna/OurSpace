import React from 'react';
import { Provider } from 'react-redux'
import { Route, Switch, Link, HashRouter, Redirect} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


import Modal from './modal/modal';
import PostFormContainer from './posts/post_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import MainPageContainer from './main_page/main_page_container';
import UsersProfileContainer from './profile_page/user_profile_container';
import LandingPage from './background/background';

const App = () => (
  <div className='window'>
    <Modal />
    
    <NavBarContainer/>
    <Switch>
      <ProtectedRoute path = '/profiles/:userId/creatpost' component={PostFormContainer}/>
      <ProtectedRoute path='/profiles/:userId' component={UsersProfileContainer}/>
      <ProtectedRoute path='/main/' component={MainPageContainer}/>
      {/* <AuthRoute exact path='/signup' component={SignUpFormContainer}/>
      <AuthRoute exact path='/login' component={LogInFormContainer}/> */}
      <Route path='/' component={LandingPage} />
      <Redirect to='/' component={LandingPage}/>
    </Switch>
  </div>
)

export default App
