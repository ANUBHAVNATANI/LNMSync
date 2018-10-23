import React, { Component } from "react";
import axios from "axios";
import "materialize-css/dist/css/materialize.min.css";
import "./stylesheets/inputs.css";
import M from "materialize-css/dist/js/materialize.min.js";

document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll("select");
  var instances = M.FormSelect.init(elems);
});

class Club extends Component {
  state = {
    clubs: []
  };

  apiCall() {
    axios.get("https://lnmiit-sync.herokuapp.com/api/get_clubs").then(resp => {
      //basically we directly do not change the state but here i had done it as i am new to react
      //console.log(resp.data.length);
      //there is some issue in the function it does api calls multiple times insted of doing it single tim
      const lengthArray = resp.data.length;
      let a = [];
      for (let i = 0; i < lengthArray; i++) {
        a[i] = resp.data[i].name;
      }
      //console.log(a);
      /*
      let b = [];
      for (let i = 0; i < 6; i++) {
        b[i] = i;
      }
      */

      let newState = {
        clubs: a
      };
      //console.log(newState);
      this.setState(newState);
    });
  }
  render() {
    //const { clubs } = this.props;
    return (
      <div>
        <div id="base_format">
          <form>
            <div className="input-field col s12 batch">
              <select>
                <option value="" disabled selected>
                  Batch
                </option>
                <option value="A1">A1</option>
                <option value="A2">A2</option>
                <option value="B1">B1</option>
                <option value="B2">B2</option>
              </select>
            </div>
            <h3>Clubs</h3>
            <div>
              <div className="clubs row">
                {this.state.clubs.map(club => (
                  <div className="col s12 m6 l4 element">
                    <label>
                      <input
                        id="indeterminate-checkbox"
                        type="checkbox"
                        className="btnn"
                        name={club}
                      />
                      <span id="span">{club}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Submit
            </button>
          </form>

          <div>{this.apiCall()}</div>
        </div>
      </div>
    );
  }
}

export default Club;
