import React from 'react';
import { Route, Switch, Link, HashRouter, Redirect} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


import PostFormContainer from './posts/post_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import MainPageContainer from './main_page/main_page_container';
import UsersProfileContainer from './profile_page/user_profile_container';
import LandingPage from './landing-page/landing-page';

const App = () => (
  <div className='window'>
    {/* <NavBarContainer/> */}
    <Switch>
      <ProtectedRoute path = '/profiles/:userId/creatpost' component={PostFormContainer}/>
      <ProtectedRoute path='/profiles/:userId' component={UsersProfileContainer}/>
      <ProtectedRoute path='/main' component={MainPageContainer}/>
      <Route path='/' component={LandingPage} />
      <Redirect to='/' component={LandingPage}/>
    </Switch>
  </div>
)

export default App
