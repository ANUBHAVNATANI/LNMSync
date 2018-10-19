import React, { Component } from "react";
import axios from "axios";
//import request from "request";
class Profile extends Component {
  state = {
    name: "Anubhav Natani",
    year: "Y-17",
    imageUrl: "http://placehold.it/75",
    clubs: ["Astronomy", "CSI"]
  };
  renderClubs() {
    if (this.state.clubs.length === 0) return;
    return (
      <div>
        Clubs-
        <ul>
          {this.state.clubs.map(club => (
            <li key={club}>{club}</li>
          ))}
        </ul>
      </div>
    );
  }
  /*
  apiCall() {
    request(
      "http://lnmiit-sync.herokuapp.com/api/get_user/109481993422611541521",
      (err, resp, body) => {
        if (!err && resp.statusCode === 200) {
          let data = JSON.parse(body);
          console.log(data);
        }
      }
    );
  }*/

  apiCall() {
    axios
      .get(
        "http://lnmiit-sync.herokuapp.com/api/get_user/109481993422611541521"
      )
      .then(resp => {
        console.log(resp);
      });
  }
  render() {
    return (
      <div>
        <img src={this.state.imageUrl} alt="" />
        <div>
          Name:
          {this.state.name}
        </div>
        <div>
          Year:
          {this.state.year}
        </div>
        <div>{this.apiCall()}</div>
      </div>
    );
  }
}

export default Profile;
