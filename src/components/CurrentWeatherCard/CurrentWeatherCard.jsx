import React from "react";
import "../CurrentWeatherCard/CurrentWeatherCard.css";

function CurrentWeatherCard({ data }) {
  const { temp, weather, feels_like, humidity } = data?.current;
  const options = {
    weekday: "long",
    month: "short",
    year: "numeric",
  };

  const requestDate = new Date().toLocaleString("EN-en", options);

  return (
    <div className="w-100 p-3 d-flex align-items-center justify-content-center shadow-lg rounded-2 bg-white mb-auto currentWeather">
      <div className="mx-auto weatherIcon">
        <img
          src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt="Weather Icon"
        />
      </div>
      <div className="my-auto pStyles">
        <p className="fw-bold display-5 tempStyles">{Math.round(temp)}&deg;C</p>
        <p className="display-6 iconStyles">{weather[0].main}</p>
        <p className="descStyle text-xs text-uppercase">
          {weather[0].description}
        </p>
        <p className="dateStyle">{requestDate}</p>
      </div>
      <div className="my-2 infoStyles p-2">
        <p className="infoText">RealFeel: {Math.round(feels_like)}&deg;C</p>
        <p className="infoText">Humidity: {humidity}%</p>
        <p className="infoText">Cloud Cover: {data?.daily[0]?.clouds}%</p>
        <p className="infoText">
          Min Temp: {Math.round(data?.daily[0]?.temp.min)}&deg;C
        </p>
        <p className="infoText">
          Max Temp: {Math.round(data?.daily[0]?.temp.max)}&deg;C
        </p>
      </div>
    </div>
  );
}

export default CurrentWeatherCard;
