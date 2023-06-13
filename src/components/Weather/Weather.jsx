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
  let APIKEY = "73b843df80ccb7a8b9dc0f23b13c9b75";

  const fetchData = async (apiURL) => {
    try {
      const response = await fetch(apiURL);
      const data = await response.json();

      return data;
    } catch (error) {
      throw Error("Failed fetching data!!");
    }
  };

  const fetchWeatherData = async (city) => {
    //handling of not properly city string
    handleCityInputError(city);
    try {
      const coordinatesURL = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${APIKEY}`;
      const coordinates = await fetchData(coordinatesURL);
      setCoordinates(coordinates);

      const { lat, lon } = coordinates[0];
      const weatherDataURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${APIKEY}&units=metric`;
      const weatherData = await fetchData(weatherDataURL);

      return weatherData;
    } catch (error) {
      throw Error("Failed fetching data!!");
    }
  };

  const fetchWeather = (city) => {
    fetchWeatherData(city)
      .then((data) => {
        setWeatherData(data);
        setError(false);
      })
      .catch((error) => {
        console.error(error);
        setAlertText(error.message);
        setError(true);
      });
  };

  // error handler for incorrect or empty string provide
  const handleCityInputError = (c) => {
    if (!c || c === "") {
      throw Error("Provide city!");
    }
  };
  // handler of searching weather
  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather(inputCity);
  };
  // handler of changes in text input
  const handleInput = (e) => {
    setInputCity(e.target.value);
  };

  return (
    <div id="wrapper" className="d-flex h-100">
      <FormComponent
        value={inputCity}
        change={handleInput}
        search={handleSearch}
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
