//error in the jquery select function

import React from "react";
//import ReactDOM from "react-dom";
import M from "materialize-css/dist/js/materialize.min.js";

document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll("select");
  var instances = M.FormSelect.init(elems, options);
});
