import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Seasons from "./Comps/Seasons";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Seasons value={2}></Seasons>
  </React.StrictMode>,
  document.getElementById("root")
);
