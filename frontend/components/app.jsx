import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./splash/navbar/navbar";
import Splash from './splash/splash'

const App = () => (
  <div>
      <Navbar />
      <Splash />
  </div>
);

export default App;