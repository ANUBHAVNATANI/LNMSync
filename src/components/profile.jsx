import React, { Component } from "react";
import axios from "axios";
//import request from "request";
import "@material/react-card/dist/card.css";
import Calendar from "react-calendar";

class Profile extends Component {
  state = {
    name: "",
    year: "",
    imageUrl: "http://placehold.it/75",
    clubs: [],
    batch: "",
    rollNo: "",
    date: new Date()
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
      function(error, response, body) {
        if (!error && response.statusCode === 200) {
          let data = JSON.parse(body);
          console.log(data);
        }
      }
    );
  }
  */
  apiCall() {
    axios
      .get(
        "http://lnmiit-sync.herokuapp.com/api/get_user/115861834213921197623"
      )
      .then(resp => {
        //basically we directly do not change the state but here i had done it as i am new to react
        //console.log(resp.data);
        //there is some issue in the function it does api calls multiple times insted of doing it single time
        let imageDataUrl = "http://placehold.it/75";
        if (resp.data.thumbnail !== "NullPhoto") {
          imageDataUrl = resp.data.thumbnail;
        }
        let newState = {
          name: resp.data.username.toUpperCase(),
          year: "Y" + resp.data.email[0] + resp.data.email[1],
          imageUrl: imageDataUrl,
          clubs: resp.data.clubs,
          batch: resp.data.batch,
          rollNo: resp.data.email.split("@")[0],
          date: new Date()
        };
        this.setState(newState);
      });
  }
  // settingProfileData(jsondata) {}

  render() {
    return (
      <div>
        {this.apiCall()}
        <div className="mdc-card">
          <div children="mdc-card__media mdc-card__media--square">
            <img src={this.state.imageUrl} alt="" />
          </div>
          <div>
            Name:
            {this.state.name}
          </div>
          <div>
            Year:
            {this.state.year}
          </div>
          <div>
            Batch:
            {this.state.batch}
          </div>
          <div>
            RollNo:
            {this.state.rollNo}
          </div>
          <div>{this.renderClubs()}</div>
        </div>
        <div>
          <Calendar value={this.state.date} />
        </div>
      </div>
    );
  }
}

export default Profile;

/*Random info

https://www.npmjs.com/package/react-calendar


https://dev.to/nburgess/creating-a-react-app-with-react-router-and-an-express-backend-33l3

https://www.zeolearn.com/magazine/connecting-reactjs-frontend-with-nodejs-backend

https://www.youtube.com/watch?v=BImhGRTunpY

https://medium.com/@krithix/multi-page-website-with-react-in-2017-f6f2af326526


*/
