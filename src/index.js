import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import "./pages/components/stylesheets/coming-soon.min.css"
//import createHistory from "history/createBrowserHistory";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import 'react-toastify/dist/ReactToastify.min.css'; 
//import Club from "./pages/components/club";
//import Try from "./pages/components/try";
//import Inputs from "./pages/components/inputs";
//import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
//import { App } from "./components";
/*
ReactDOM.render(
  <Router history={createHistory()}>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </Router>,
  document.getElementById("root")
);*/

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

//https://www.youtube.com/watch?v=91F8reC8kvo
