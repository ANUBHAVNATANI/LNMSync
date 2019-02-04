import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
//import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
//components and pages imports

//import Club from "./pages/components/club";
import Login from "./pages/components/login";
//import Inputs from "./pages/components/inputs";
//import Registration from "./pages/components/registrationForm";

class App extends Component {
  render() {
    return (
      <div>
      <Login />
      <ToastContainer
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnVisibilityChange
      draggable
      pauseOnHover
      />
      </div>
    );
  }
}

export default App;
