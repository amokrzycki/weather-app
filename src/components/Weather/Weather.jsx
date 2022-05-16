import React, { useState } from "react";
import FormComponent from "../FormComponent";
import WeatherResult from "./WeatherResult";

const Weather = () => {
  // hook states
  const [inputCity, setInputCity] = useState("");
  const [data, setData] = useState({});
  const [forecastData, setForecastData] = useState({});
  const [alertText, setAlertText] = useState("");
  const [error = false, setError] = useState(Boolean);

  const getForecastData = (city) => {
    handleCityInputError(city);
    //getting APIKEY from local .JSON
    fetch(`./data.json`, {
      headers: {
        // setting properly content type to get APIKEY from JSON
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      // checking response status is ok
      .then(handleApiKeyFetchError)
      .then((response) => {
        return response.json();
      })
      .then((key) => {
        const APIKEY = JSON.parse(JSON.stringify(key.key));
        //API URL
        const apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKEY}&units=metric`;
        //getting API data
        fetch(apiURL)
          .then((response) => {
            if (!response.ok) {
              throw Error(`Can't fetch weather for ${city}!`);
            }
            return response;
          })
          .then((response) => response.json())
          .then((data) => {
            // set the app data state to the data retrieved from the API
            setForecastData(data);
            setError(false);
          })
          .catch((err) => {
            console.log(err);
            setAlertText(err);
            setError(true);
          });
      });
  };

  const getWeatherData = (city) => {
    handleCityInputError(city);
    //getting APIKEY from local .JSON
    fetch(`./data.json`, {
      headers: {
        // setting properly content type to get APIKEY from JSON
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      // checking response status is ok
      .then(handleApiKeyFetchError)
      .then((response) => {
        return response.json();
      })
      .then((key) => {
        const APIKEY = JSON.parse(JSON.stringify(key.key));
        //API URL
        const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`;
        //getting API data
        fetch(apiURL)
          .then((response) => {
            if (!response.ok) {
              throw Error(`Can't fetch weather for ${city}!`);
            }
            return response;
          })
          .then((response) => response.json())
          .then((data) => {
            // set the app data state to the data retrieved from the API
            setData(data);
            setError(false);
          })
          .catch((err) => {
            console.log(err);
            setAlertText(err);
            setError(true);
          });
      });
  };
  // error handler for incorrect or empty string  provide
  const handleCityInputError = (c) => {
    if (!c || c === "") {
      setAlertText("Provide city!");
      setError(true);
      throw Error("Provide city!");
    }
  };
  // error Hanlder for APIKEY getting
  const handleApiKeyFetchError = (response) => {
    if (!response.ok) {
      setAlertText("Api key not fetched!");
      setError(true);
      throw Error(response.statusText);
    }
    return response;
  };
  // handler of searching weather
  const handleSearch = (e) => {
    e.preventDefault();
    getWeatherData(inputCity);
    getForecastData(inputCity);
    console.log(forecastData);
  };
  // handler of changes in text input
  const handleInput = (e) => {
    setInputCity(e.target.value);
  };

  return (
    <div id="wrapper">
      <FormComponent
        value={inputCity}
        change={handleInput}
        search={handleSearch}
        label={data?.weather}
      />
      <WeatherResult
        temp={data?.main?.temp}
        city={data?.name}
        feelsLike={data?.main?.feels_like}
        wind={data?.wind?.speed}
        sunrise={data?.sys?.sunrise}
        sunset={data?.sys?.sunset}
        alertText={alertText}
        error={error}
      />
    </div>
  );
};

export default Weather;
