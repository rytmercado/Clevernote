import React from "react";
import { Switch, Route } from "react-router-dom";
import Splash from './splash/splash'
import SignupContainer from './session/signup_container'
import LoginContainer from './session/login_container'
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import Notes from './notes/notes'

const App = () => (
  <div>
    <Switch>
      <ProtectedRoute path="/notes" component={Notes}/>
      <AuthRoute path="/signup" component={SignupContainer} />
      <AuthRoute path="/login" component={LoginContainer} />
      <Route path="/" component={Splash} />
    </Switch>
  </div>
);

export default App;