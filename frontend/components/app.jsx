import React from "react";
import { Switch, Route } from "react-router-dom";
import Splash from './splash/splash'
import SignupContainer from './session/signup_container'
import LoginContainer from './session/login_container'
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import Home from './home/home'

const App = () => (
  <div>
    <Switch>
      <AuthRoute path="/signup" component={SignupContainer} />
      <AuthRoute path="/login" component={LoginContainer} />
      <ProtectedRoute path="/home" component={Home}/>
      <Route path="/" component={Splash} />
    </Switch>
  </div>
);

export default App;