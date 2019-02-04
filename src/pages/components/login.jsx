//imports
import React, { Component } from "react";
import GoogleLogin, {GoogleLogout} from "react-google-login";
import { toast } from 'react-toastify';
//google login success function
const loginSuccess = response => {
  //use of the add user action to add the user to the database
  //react router command to move the user to different page
};
//google login faliure function
const loginFaliure = response => {
  toast.error('Login Error', {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    });
}
//just for checking should be on the profile page
const logout = response => {
  //reverting user to the base page
}
class Login extends Component {
  render() {
    return (
      <div>
        <h1>Sample Login</h1>
        <div>
          {/*Login button for the user*/}
        <GoogleLogin
    clientId="269856010184-10bn3gnl81ouvqr46fmj60b4rjkibg2t.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={loginSuccess}
    onFailure={loginFaliure}
  />
  </div>
        {/*Test logout button*/}
   <GoogleLogout
      buttonText="Logout"
      onLogoutSuccess={logout}
    ></GoogleLogout>
      </div>
    );
  }
}

export default Login;
