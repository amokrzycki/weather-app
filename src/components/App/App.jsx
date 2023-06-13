import Weather from "../Weather/Weather";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";

const App = () => {
  return (
    <div
      id="App"
      className="d-flex align-items-center justify-content-center vw-100 vh-100 py-5"
    >
      <Weather />
    </div>
  );
};

export default App;
