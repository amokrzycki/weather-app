import Weather from "../Weather/Weather";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div id="App">
        <Weather />
      </div>
    );
  }
}

export default App;
