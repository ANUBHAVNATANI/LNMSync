//imports
import React, { Component } from "react";
import GoogleLogin, {GoogleLogout} from "react-google-login";
import { toast } from 'react-toastify';
import axios from 'axios';
import {createStore} from 'redux'; 
import rootReducer from '../reducers'
import {addUser} from '../actions/index.js';
//test code
//-------------------------------------------//
const store = createStore(rootReducer);
async function checkUser(gId){
  var resp = await axios.get("http://lnmiit-sync.herokuapp.com/api/get_user/"+ gId)
      //console.log(resp.data);
      //let isRegistered = false;
      //let clubs = [];
      let userState={};
      if(resp.data==={}){
        //console.log("free data");
        userState = { 
          isRegistered:false,
          clubs:[]
        }
        //console.log(userState);
        return userState;
      }
      else{
        //console.log("different");
        //isRegistered=true;
        //r_clubs = resp.data.clubs;
        //r_batch = resp.data.batch;
        userState = { 
          isRegistered:true,
          clubs:resp.data.clubs
        }
        //console.log(userState);
        return userState;
      }
    
  
}

//-------------------------------------------------------------//
//google login success function
async function loginSuccess(response){
  //use of the add user action to add the user to the database
  //react router command to move the user to different page
  //let isRegistered = false;
  //let r_clubs = [];
  //let r_batch = null;
  //console.log(response);
  try{
  let interState = await checkUser(response.googleId);
  //console.log(interState);
  let googleResp = {
    username: response.profileObj.givenName+" "+response.profileObj.familyName,
    googleId: response.googleId,
    thumbnail: response.profileObj.imageUrl,
    clubs: interState.clubs,
    email: response.profileObj.email,
    isRegistered: interState.isRegistered}
  //console.log(googleResp);
  store.dispatch(addUser(googleResp));


  //console.log(resp)
  
  console.log(store.getState());
  //setting the resp to get the proper state passed
 
  
}
catch(errorMsg){
  console.log(errorMsg);
}
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

//working 
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
