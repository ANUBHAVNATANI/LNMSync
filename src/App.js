import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//components and pages imports

import Club from "./pages/components/club";
import Login from "./pages/components/login";
import Inputs from "./pages/components/inputs";
//import Registration from "./pages/components/registrationForm";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" component={Login} exact />
            <Route path="/registration" component={Club} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
