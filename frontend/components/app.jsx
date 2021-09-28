import React from 'react';
import { Provider } from 'react-redux'
import { Route, Switch, Link, HashRouter} from 'react-router-dom';

import SignUpFormContainer from './session_form/signup_form_comtainer';

const App = () => (
  <div>
    <header>
      <h1>OurSpace</h1>
    </header>

    <Switch>
      <Route path='/signup' component={SignUpFormContainer}/>
    </Switch>

  </div>
)

export default App