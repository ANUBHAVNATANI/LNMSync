import React, { Component } from "react";
import "./css/coming-soon.css";
import GoogleLogin from "react-google-login";
//import "./vendor/jquery/jquery.min.js";
//import "./js/coming-soon.js";
//import "./javascript/jquery.min.js";
//import "./stylesheets/all.min.css"
//import "bootstrap/dist/js/jquery.min.js"
import "./vendor/fontawesome-free/css/all.min.css";
//import "./vendor/bootstrap/js/bootstrap.bundle.min.js";
//import jQuery from 'jquery';
/*
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
*/
class Login extends Component {
  render() {
    return (
      <div className="body-a">
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content />
        <meta name="author" content />
        <title>LNMSync</title>
        {/* Bootstrap core CSS */}
        <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        {/* Custom fonts for this template */}
        
        <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css" />
        {/* Custom styles for this template */}
        <link href="css/coming-soon.min.css" rel="stylesheet" />
        <div className="overlay" />
        <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
        <source src={require("./mp4/bg.mp4")} type="video/mp4" />
        </video>
        <div className="masthead">
          <div className="masthead-bg" />
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-12 my-auto">
                <div className="masthead-content text-white py-5 py-md-0">
                  <h1 className="mb-3">Coming Soon!</h1>
                  <p className="mb-5">We're working hard to finish the development of this site. Our target launch date is
                    <strong>January 2019</strong>! Sign up for updates using the form below!</p>
                  <div className="input-group input-group-newsletter">
                    <input type="email" className="form-control" placeholder="Enter email..." aria-label="Enter email..." aria-describedby="basic-addon" />
                    <div className="input-group-append">
                      <button className="btn btn-secondary" type="button">Notify Me!</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="social-icons">
          <ul className="list-unstyled text-center mb-0">
            <li className="list-unstyled-item">
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li className="list-unstyled-item">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li className="list-unstyled-item">
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Login;
