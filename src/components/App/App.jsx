import "./App.css";
import Header from "../Header";
import Weather from "../Weather";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div id="App" className="center">
        <Header />
        <Weather />
      </div>
    );
  }
}

export default App;
