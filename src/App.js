import React, { Component } from "react";
import "./App.css";
import { BrowserRouter,Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
//components and pages imports

import Login from "./components/login";
import Register from "./components/register";
import Profile from "./components/profile";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Route path='/' component={Login} />
        <Route path='/registration' component={Register} />
        <Route path='/profile' component={Profile}/>
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
      </BrowserRouter>
    );
  }
}

export default App;
