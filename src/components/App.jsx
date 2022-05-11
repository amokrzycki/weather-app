import { Component } from 'react';
import './App.css';
import Form from './Form';
import Result from './Result';

class App extends Component {
  state = {
    value: "Rzeszow",
    date: '',
    city: '',
    sunrise: '',
    sunset: '',
    temp: '',
    pressure: '',
    wind: '',
    err: false
  }

  handleInput = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  handleApiKeyFetchError(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  handleCitySearch = (event) => {
    event.preventDefault();
    fetch(`./data.json`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(this.handleApiKeyFetchError)
      .then(response => {
        return response.json();
      })
      .then(key => {
        const APIKEY = JSON.parse((JSON.stringify(key.key)));
        const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKEY}&units=metric`;
        fetch(API)
          .then(
            response => {
              if (response.ok) {
                return response;
              }
              throw Error("Can't fetch weather for: ")
            }
          )
          .then(response => response.json())
          .then(data => {
            const requestDate = new Date().toLocaleString()
            this.setState(actualState => ({
              err: false,
              date: requestDate,
              sunrise: data.sys.sunrise,
              sunset: data.sys.sunset,
              temp: data.main.temp,
              pressure: data.main.pressure,
              wind: data.wind.speed,
              city: actualState.value,
            }))
          })
          .catch(err => {
            this.setState(actualState => ({
              err: true,
              city: actualState.value,
            }))
          })
      })
  }
  render() {
    return (
      <div className='App'>
        <Form value={this.state.value} change={this.handleInput} search={this.handleCitySearch} />
        <Result weather={this.state} />
      </div>
    )
  }
}

export default App;