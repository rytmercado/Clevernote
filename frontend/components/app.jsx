import React from "react";
import { Switch, Route } from "react-router-dom";
import Splash from './splash/splash'

const App = () => (
  <div>
    <Switch>
      {/* <Route path="/signup" component={<div><p>signup</p></div>} /> */}
      {/* <Route path="/login" component={<div><p>login</p></div>} /> */}
      <Route path="/" component={Splash} />
    </Switch>
  </div>
);

export default App;