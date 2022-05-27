import React, { useState } from "react";
import FormComponent from "../Form/FormComponent";
import WeatherResults from "./WeatherResults";

const Weather = () => {
  // hook states
  const [inputCity, setInputCity] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [coordinates, setCoordinates] = useState({});
  const [alertText, setAlertText] = useState("");
  const [error = false, setError] = useState(Boolean);
  let APIKEY = "";

  const getWeatherData = (city) => {
    // handling of not properly city string
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
        // setting APIKEY
        APIKEY = JSON.parse(JSON.stringify(key.key));
        //API URL
        const apiURL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${APIKEY}`;
        // returning fetch to create promise
        return fetch(apiURL);
      })
      .then((response) => {
        if (!response.ok) {
          throw Error(`Can't fetch coordinates for ${city}!`);
        }
        return response;
      })
      .then((response) => response.json())
      .then((data) => {
        // set the state to coordinates of searched city to the data retrieved from the API
        setCoordinates(data);
        // if we fetched data correctly set error state to false
        setError(false);
        const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${data[0]?.lat}&lon=${data[0]?.lon}&exclude=hourly,minutely&appid=${APIKEY}&units=metric`;
        // returning fetch to create promise
        return fetch(apiURL);
      })
      .then((response) => {
        if (!response.ok) {
          throw Error(`Can't fetch weather for ${city}!`);
        }
        return response;
      })
      .then((response) => response.json())
      .then((data) => {
        // set the app data state to the data retrieved from the API
        setWeatherData(data);
        // if we fetched data correctly set error state to false
        setError(false);
      })
      .catch((err) => {
        console.log(err);
        setAlertText(err);
        setError(true);
      });
  };
  // error handler for incorrect or empty string provide
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
  };
  // handler of changes in text input
  const handleInput = (e) => {
    setInputCity(e.target.value);
  };

  return (
    <div id="wrapper" className="d-flex w-75 h-100">
      <FormComponent
        value={inputCity}
        change={handleInput}
        search={handleSearch}
        label={weatherData?.current?.weather[0]?.description}
      />
      <WeatherResults
        alertText={alertText}
        error={error}
        forecast={weatherData}
        coordinates={coordinates}
      />
    </div>
  );
};

export default Weather;
