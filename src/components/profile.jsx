import React, { Component } from "react";
class Profile extends Component {
  state = {
    name: "Anubhav Natani",
    year: "Y-17",
    imageUrl: "http://placehold.it/75",
    clubs: ["Astronomy", "CSI"]
  };
  renderClubs() {
    if (this.state.clubs.length == 0) return;
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
        <div>{this.renderClubs()}</div>
      </div>
    );
  }
}

export default Profile;
