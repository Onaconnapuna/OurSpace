import React from 'react';
import { Provider } from 'react-redux'
import { Route, Switch, Link, HashRouter, Redirect} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SignUpFormContainer from './session_form/signup_form_comtainer';
import LogInFormContainer from './session_form/login_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import MainPageContainer from './main_page/main_page_container';
import UsersProfileContainer from './profile_page/user_profile_container';

const App = () => (
  <div>
    <Switch>
      <ProtectedRoute path='/profiles/:userId' component={UsersProfileContainer}/>
      <ProtectedRoute path='/main/:userId' component={MainPageContainer}/>
      <AuthRoute exact path='/signup' component={SignUpFormContainer}/>
      <AuthRoute exact path='/login' component={LogInFormContainer}/>
      <Route exact path='/' component={NavBarContainer}/>
      <Redirect to='/'/>
    </Switch>
  </div>
)

export default App