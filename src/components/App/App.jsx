import { Component } from "react";
import "./App.css";
import FormComponent from "../FormComponent/FormComponent";
import Result from "../Result/Result";
import Header from "../Header/Header";

class App extends Component {
  // app state with all needed data to collect from API
  state = {
    value: "Rzeszow",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    err: false,
    label: "Provide your City!",
  };
  // handler of changes in text input with id #citySearch
  handleInput = (event) => {
    this.setState({
      value: event.target.value,
    });
  };
  // error Hanlder for APIKEY getting
  handleApiKeyFetchError(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }
  // handler of searching weather for cities
  handleCitySearch = (event) => {
    event.preventDefault();
    //getting APIKEY from local .JSON
    fetch(`./data.json`, {
      headers: {
        // setting properly content type to get APIKEY from JSON
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      // checking response status is ok
      .then(this.handleApiKeyFetchError)
      .then((response) => {
        return response.json();
      })
      .then((key) => {
        //convert JSON to object and then to string
        const APIKEY = JSON.parse(JSON.stringify(key.key));
        //API URL
        const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKEY}&units=metric`;
        //getting API data
        fetch(API)
          .then((response) => {
            if (response.ok) {
              return response;
            }
            throw Error(`Can't fetch weather for: ${this.state.value}`);
          })
          .then((response) => response.json())
          .then((data) => {
            const requestDate = new Date().toLocaleString();
            // pass on fetched data from API to state of App
            this.setState((actualState) => ({
              err: false,
              label: `Description of weather: ${data.weather[0].description}`,
              date: requestDate,
              sunrise: data.sys.sunrise,
              sunset: data.sys.sunset,
              temp: data.main.temp,
              pressure: data.main.pressure,
              wind: data.wind.speed,
              city: actualState.value, // making sure we use value from actual state not from initialized state value
            }));
          })
          // catching errors
          .catch((err) => {
            console.log(err);
            this.setState((actualState) => ({
              label: "Provide existing City!",
              err: true,
              city: actualState.value, // pass on city to tell user we don't have this city in our database
            }));
          });
      });
  };
  render() {
    return (
      <div id="App" className="center">
        <Header />
        <div id="wrapper" className="w-25">
          <FormComponent
            value={this.state.value}
            change={this.handleInput}
            search={this.handleCitySearch}
            label={this.state.label}
            labelChange={this.handleLabelChange}
          />
          <Result weather={this.state} />
        </div>
      </div>
    );
  }
}

export default App;
