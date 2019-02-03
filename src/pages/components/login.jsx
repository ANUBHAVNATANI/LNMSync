import React, { Component } from "react";

import GoogleLogin, {GoogleLogout} from "react-google-login";




const responseGoogle = response => {
  console.log(response);
  let newState = {
    username: response.givenName + " " + response.familyName,
    googleId: response.googleId,
    thumbnail: response.imageUrl,
    clubs: [],
    batch: "",
    email: response.email
  };
};
const logout = response => {
  console.log("It is working");
}
{/*https://fkhadra.github.io/react-toastify/*/}
class Login extends Component {
  render() {
    return (
      <div>
        <GoogleLogin
    clientId="269856010184-10bn3gnl81ouvqr46fmj60b4rjkibg2t.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
  />
   <GoogleLogout
      buttonText="Logout"
      onLogoutSuccess={logout}
    ></GoogleLogout>
      </div>
    );
  }
}

export default Login;
