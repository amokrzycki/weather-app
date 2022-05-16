import { useState } from "react";
import "./App.css";
import FormComponent from "../FormComponent";
import Result from "../Result/Result";
import Header from "../Header";

function App() {
  const [inputCity, setInputCity] = useState("");
  const [data, setData] = useState({});

  const getWeatherData = (city) => {
    handleCityInputError(city);
    fetch(`./data.json`, {
      headers: {
        // setting properly content type to get APIKEY from JSON
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(handleApiKeyFetchError)
      .then((response) => {
        return response.json();
      })
      .then((key) => {
        const APIKEY = JSON.parse(JSON.stringify(key.key));
        const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`;
        fetch(apiURL)
          .then((response) => {
            if (!response.ok) {
              throw Error(`Can't fetch weather for ${city}!`);
            }
            return response;
          })
          .then((response) => response.json())
          .then((data) => {
            setData(data);
          })
          .catch((err) => {
            console.log(err);
          });
      });
  };

  // handler of searching weather for cities
  const handleSearch = (e) => {
    e.preventDefault();
    getWeatherData(inputCity);
  };

  const handleInput = (e) => {
    setInputCity(e.target.value);
  };

  const handleCityInputError = (c) => {
    if (!c || c === "") {
      throw Error("Provide city!");
    }
  };
  // error Hanlder for APIKEY getting
  const handleApiKeyFetchError = (response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  };

  return (
    <div id="App" className="center">
      <Header />
      <div id="wrapper">
        <FormComponent
          value={inputCity}
          change={handleInput}
          search={handleSearch}
          label={data?.weather}
        />
        <Result
          temp={data?.main?.temp}
          city={data?.name}
          feelsLike={data?.main?.feels_like}
          wind={data?.wind?.speed}
          sunrise={data?.sys?.sunrise}
          sunset={data?.sys?.sunset}
          result={data}
        />
      </div>
    </div>
  );
}

export default App;
