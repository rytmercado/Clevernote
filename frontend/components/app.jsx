import React from "react";
import { Switch, Route } from "react-router-dom";
import Splash from './splash/splash'
import SignupContainer from './session/signup_container'
import LoginContainer from './session/login_container'
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import Notes from './notes/notes'
import Notebooks from './notebooks/notebooks'
import Tags from "./tags/tags";

const App = () => (
  <div className="bottom-fix">
    <Switch>
      <ProtectedRoute path="/notes" component={Notes}/>
      <ProtectedRoute path="/tags" component={Tags}/>
      <ProtectedRoute path="/notebooks" component={Notebooks} />
      <AuthRoute path="/signup" component={SignupContainer} />
      <AuthRoute path="/login" component={LoginContainer} />
      <Route path="/" component={Splash} />
    </Switch>
 </div>
);

export default App;