import React, { Component } from "react";
import "./stylesheets/inputs.css";
import "materialize-css/dist/css/materialize.min.css";
//import "./javascript/inputs.js";
//import ReactDependentScript from "react-dependent-script";
import M from "materialize-css/dist/js/materialize.min.js";
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll("select");
  var instances = M.FormSelect.init(elems);
});
const Try = () => {
  return (
    <div>
      <title>Sync-Form</title>
      <link
        href="https://fonts.googleapis.com/css?family=Nunito"
        rel="stylesheet"
      />
      {/* Nunito */}
      <link rel="shortcut icon" href="images/favicon.ico" />

      <div id="base_format">
        <form>
          <div className="input-field s12 batch">
            <select>
              <option value disabled selected>
                Batch
              </option>
              <option value="A1">A1</option>
              <option value="A2">A2</option>
              <option value="B1">B1</option>
              <option value="B2">B2</option>
            </select>
          </div>
          {/*<div>
              {$(document).ready(function() {
                $("select").formSelect();
              })}
            </div>*/}
          <h3>Clubs</h3>
          <div className="clubs row">
            <div className="col s12 m6 l4 element">
              <label>
                <input
                  id="indeterminate-checkbox"
                  type="checkbox"
                  className="btnn"
                />
                <span>Art Club</span>
              </label>
            </div>
            <div className="col s12 m6 l4 element">
              <label>
                <input
                  id="indeterminate-checkbox"
                  type="checkbox"
                  className="btnn"
                />
                <span>Dance Club</span>
              </label>
            </div>
            <div className="col s12 m6 l4 element">
              <label>
                <input
                  id="indeterminate-checkbox"
                  type="checkbox"
                  className="btnn"
                />
                <span>Music Club</span>
              </label>
            </div>
            <div className="col s12 m6 l4 element">
              <label>
                <input
                  id="indeterminate-checkbox"
                  type="checkbox"
                  className="btnn"
                />
                <span>Drama Club</span>
              </label>
            </div>
            <div className="col s12 m6 l4 element">
              <label>
                <input
                  id="indeterminate-checkbox"
                  type="checkbox"
                  className="btnn"
                />
                <span>Fundoo Club</span>
              </label>
            </div>
            <div className="col s12 m6 l4 element">
              <label>
                <input
                  id="indeterminate-checkbox"
                  type="checkbox"
                  className="btnn"
                />
                <span>Fashion Club</span>
              </label>
            </div>
            <div className="col s12 m6 l4 element">
              <label>
                <input
                  id="indeterminate-checkbox"
                  type="checkbox"
                  className="btnn"
                />
                <span>Nukkad Mandli</span>
              </label>
            </div>
            <div className="col s12 m6 l4 element">
              <label>
                <input
                  id="indeterminate-checkbox"
                  type="checkbox"
                  className="btnn"
                />
                <span>Photography Club</span>
              </label>
            </div>
            <div className="col s12 m6 l4 element">
              <label>
                <input
                  id="indeterminate-checkbox"
                  type="checkbox"
                  className="btnn"
                />
                <span>Sankalp Club</span>
              </label>
            </div>
            <div className="col s12 m6 l4 element">
              <label>
                <input
                  id="indeterminate-checkbox"
                  type="checkbox"
                  className="btnn"
                />
                <span>Media cell</span>
              </label>
            </div>
            <div className="col s12 m6 l4 element">
              <label>
                <input
                  id="indeterminate-checkbox"
                  type="checkbox"
                  className="btnn"
                />
                <span>Astronomy Club</span>
              </label>
            </div>
            <div className="col s12 m6 l4 element">
              <label>
                <input
                  id="indeterminate-checkbox"
                  type="checkbox"
                  className="btnn"
                />
                <span>Cybros</span>
              </label>
            </div>
            <div className="col s12 m6 l4 element">
              <label>
                <input
                  id="indeterminate-checkbox"
                  type="checkbox"
                  className="btnn"
                />
                <span>E-cell</span>
              </label>
            </div>
            <div className="col s12 m6 l4 element">
              <label>
                <input
                  id="indeterminate-checkbox"
                  type="checkbox"
                  className="btnn"
                />
                <span>IIC</span>
              </label>
            </div>
            <div className="col s12 m6 l4 element">
              <label>
                <input
                  id="indeterminate-checkbox"
                  type="checkbox"
                  className="btnn"
                />
                <span>Literary Commitee</span>
              </label>
            </div>
            <div className="col s12 m6 l4 element">
              <label>
                <input
                  id="indeterminate-checkbox"
                  type="checkbox"
                  className="btnn"
                />
                <span>MUN Society</span>
              </label>
            </div>
            <div className="col s12 m6 l4 element">
              <label>
                <input
                  id="indeterminate-checkbox"
                  type="checkbox"
                  className="btnn"
                />
                <span>Quiz Club</span>
              </label>
            </div>
            <div className="col s12 m6 l4 element">
              <label>
                <input
                  id="indeterminate-checkbox"
                  type="checkbox"
                  className="btnn"
                />
                <span>Phoenix Club</span>
              </label>
            </div>
            <div className="col s12 m6 l4 element">
              <label>
                <input
                  id="indeterminate-checkbox"
                  type="checkbox"
                  className="btnn"
                />
                <span>Nirog Club</span>
              </label>
            </div>
            <div className="col s12 m6 l4 element">
              <label>
                <input
                  id="indeterminate-checkbox"
                  type="checkbox"
                  className="btnn"
                />
                <span>ASME</span>
              </label>
            </div>
            <div className="col s12 m6 l4 element">
              <label>
                <input
                  id="indeterminate-checkbox"
                  type="checkbox"
                  className="btnn"
                />
                <span>CSI</span>
              </label>
            </div>
            <div className="col s12 m6 l4 element">
              <label>
                <input
                  id="indeterminate-checkbox"
                  type="checkbox"
                  className="btnn"
                />
                <span>IEEE</span>
              </label>
            </div>
            <div className="col s12 m6 l4 element">
              <label>
                <input
                  id="indeterminate-checkbox"
                  type="checkbox"
                  className="btnn"
                />
                <span>Alumni Association</span>
              </label>
            </div>
            <div className="col s12 m6 l4 element">
              <label>
                <input
                  id="indeterminate-checkbox"
                  type="checkbox"
                  className="btnn"
                />
                <span>None</span>
              </label>
            </div>
          </div>
          {/* <div class="flex-container">
				<div class="container">
				  <div class="row">
				    <form method="get">
				      <div class="form-group">

				      	<div class="heading"><h4>Science and tech</h4>

				        <div class="col-md-3"><label class="btn btn-primary"><img src="http://content.nike.com/content/dam/one-nike/globalAssets/menu_header_images/OneNike_Global_Nav_Icons_Running.png" alt="..." class="img-thumbnail img-check"><input type="checkbox" name="chk1" id="item4" value="val1" class="hidden" autocomplete="off"></label></div>
				        <div class="col-md-3"><label class="btn btn-primary"><img src="http://content.nike.com/content/dam/one-nike/globalAssets/menu_header_images/OneNike_Global_Nav_Icons_Basketball.png" alt="..." class="img-thumbnail img-check"><input type="checkbox" name="chk2" id="item4" value="val2" class="hidden" autocomplete="off"></label></div>
				        <div class="col-md-3"><label class="btn btn-primary"><img src="http://content.nike.com/content/dam/one-nike/globalAssets/menu_header_images/OneNike_Global_Nav_Icons_Football.png" alt="..." class="img-thumbnail img-check"><input type="checkbox" name="chk3" id="item4" value="val3" class="hidden" autocomplete="off"></label></div>
				        <div class="col-md-3"><label class="btn btn-primary"><img src="http://content.nike.com/content/dam/one-nike/globalAssets/menu_header_images/OneNike_Global_Nav_Icons_Soccer.png" alt="..." class="img-thumbnail img-check"><input type="checkbox" name="chk4" id="item4" value="val6" class="hidden" autocomplete="off"></label></div>
				        </div>

				        <div class="heading"><h4>Student Chapters at The LNMIIT</h4>		

				        <div class="col-md-3"><label class="btn btn-primary"><img src="http://content.nike.com/content/dam/one-nike/globalAssets/menu_header_images/OneNike_Global_Nav_Icons_Soccer.png" alt="..." class="img-thumbnail img-check"><input type="checkbox" name="chk5" id="item5" value="val5" class="hidden" autocomplete="off"></label></div>
				        <div class="col-md-3"><label class="btn btn-primary"><img src="http://content.nike.com/content/dam/one-nike/globalAssets/menu_header_images/OneNike_Global_Nav_Icons_Soccer.png" alt="..." class="img-thumbnail img-check"><input type="checkbox" name="chk6" id="item6" value="vas4" class="hidden" autocomplete="off"></label></div>
				        <div class="col-md-3"><label class="btn btn-primary"><img src="http://content.nike.com/content/dam/one-nike/globalAssets/menu_header_images/OneNike_Global_Nav_Icons_Soccer.png" alt="..." class="img-thumbnail img-check"><input type="checkbox" name="chk4" id="item4" value="val4" class="hidden" autocomplete="off"></label></div>
				        </div>
				        
				        <div class="heading"><h4>Health Club</h4>

				        <div class="col-md-3"><label class="btn btn-primary"><img src="http://content.nike.com/content/dam/one-nike/globalAssets/menu_header_images/OneNike_Global_Nav_Icons_Soccer.png" alt="..." class="img-thumbnail img-check"><input type="checkbox" name="chk4" id="item4" value="val4" class="hidden" autocomplete="off"></label></div>
				        </div>

				        <div class="heading"><h4>Cultural</h4>

				        <div class="col-md-3"><label class="btn btn-primary"><img src="http://content.nike.com/content/dam/one-nike/globalAssets/menu_header_images/OneNike_Global_Nav_Icons_Soccer.png" alt="..." class="img-thumbnail img-check"><input type="checkbox" name="chk4" id="item4" value="val4" class="hidden" autocomplete="off"></label></div>
				        <div class="col-md-3"><label class="btn btn-primary"><img src="http://content.nike.com/content/dam/one-nike/globalAssets/menu_header_images/OneNike_Global_Nav_Icons_Soccer.png" alt="..." class="img-thumbnail img-check"><input type="checkbox" name="chk4" id="item4" value="val4" class="hidden" autocomplete="off"></label></div>
				        <div class="col-md-3"><label class="btn btn-primary"><img src="http://content.nike.com/content/dam/one-nike/globalAssets/menu_header_images/OneNike_Global_Nav_Icons_Soccer.png" alt="..." class="img-thumbnail img-check"><input type="checkbox" name="chk4" id="item4" value="val4" class="hidden" autocomplete="off"></label></div>
				        <div class="col-md-3"><label class="btn btn-primary"><img src="http://content.nike.com/content/dam/one-nike/globalAssets/menu_header_images/OneNike_Global_Nav_Icons_Soccer.png" alt="..." class="img-thumbnail img-check"><input type="checkbox" name="chk4" id="item4" value="val4" class="hidden" autocomplete="off"></label></div>
				        <div class="col-md-3"><label class="btn btn-primary"><img src="http://content.nike.com/content/dam/one-nike/globalAssets/menu_header_images/OneNike_Global_Nav_Icons_Soccer.png" alt="..." class="img-thumbnail img-check"><input type="checkbox" name="chk4" id="item4" value="val4" class="hidden" autocomplete="off"></label></div>
				        <div class="col-md-3"><label class="btn btn-primary"><img src="http://content.nike.com/content/dam/one-nike/globalAssets/menu_header_images/OneNike_Global_Nav_Icons_Soccer.png" alt="..." class="img-thumbnail img-check"><input type="checkbox" name="chk4" id="item4" value="val4" class="hidden" autocomplete="off"></label></div>
				    </div> 
				      </div>				      
				    </form>
				  </div>
				</div>
			</div>*/}
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
          </button>
        </form>
      </div>
      {/*
	 
  
	
*/}
    </div>
  );
};

export default Try;
