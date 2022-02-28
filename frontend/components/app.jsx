import React from 'react';
import { useState } from 'react';
import { Route, Switch, Link, HashRouter, Redirect} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import MainPageContainer from './main_page/main_page_container';
import UsersProfileContainer from './profile_page/user_profile_container';
import LandingPage from './landing-page/landing-page';

class App extends React.Component {
  constructor(props) {
    super(props) 

    this.state = { 
      key: 0
    }

    this.reRenderGodDamnIt=this.reRenderGodDamnIt.bind(this)
  }

  reRenderGodDamnIt() {
    this.setState({
      key: this.state.key + 1
    })
  }

  render() {
    return(
    <div className='window'>
      <Switch>
        <ProtectedRoute exact path='/profiles/:userId' component={(props) => (
    <UsersProfileContainer
      {...props}
      key={props.match.params.user_id}
    />
  )}/>
        <ProtectedRoute path='/main' component={MainPageContainer}/>
        <AuthRoute path='/' component={LandingPage} />
        {/* <Redirect to='/' component={LandingPage}/> */}
      </Switch>
   </div>
    )
  }
}
// const App = () => (
//   <div className='window'>
//     <Switch>
//       <ProtectedRoute path='/profiles/:userId' component={UsersProfileContainer}/>
//       <ProtectedRoute path='/main' component={MainPageContainer}/>
//       <Route path='/' component={LandingPage} />
//       <Redirect to='/' component={LandingPage}/>
//     </Switch>
//   </div>
// )

export default App
