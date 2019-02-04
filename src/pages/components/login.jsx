import React, { Component } from "react";
import "./stylesheets/login.css";
import GoogleLogin from "react-google-login";

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
class Login extends Component {
  state = {
    username: "",
    googleId: "",
    thumbnail: "http://placehold.it/75",
    clubs: [],
    batch: "",
    email: ""
  };
  render() {
    return (
      <div id="body-tag">
        <title>LNMIIT Sync</title>
        <link
          href="https://fonts.googleapis.com/css?family=Niramit"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="images/favicon.ico" />
        <div id="login">
          <div>
            <img src={require("./images/backkground.jpg")} id="side" />
          </div>
          <div>
            <form id="login-form">
              <img
                src={require("./images/dummy.png")}
                className="in-progress"
                id="user_image"
              />
              <h1 id="login-h1">Login</h1>
              {/* <input type="email" placeholder="  Email" name="email" class="in-progress"></label>
    <br>
    <input type="password" placeholder="  Password" name="password" class="in-progress"></label>
    <button type="submit" id="login_button" class="in-progress"> Login </button>
    <br> 
    <a href="#" class="in-progress">Forgot Password?</a> */}
              <GoogleLogin
                clientId="269856010184-10bn3gnl81ouvqr46fmj60b4rjkibg2t.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
