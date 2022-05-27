import React from "react";
import "../ForecastCard/ForecastCard.css";

function ForecastCard({ day }) {
  return (
    <li className="p-3 d-flex align-items-center justify-content-center rounded-3 my-auto listStyles">
      <div className="my-auto forecastInfo">
        <p className="fw-bold tempStyles mb-2">
          {Math.round(day.temp.max)}&deg;C
        </p>
        <p className="weatherStyles">
          {day.weather[0].main}
          <img
            src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
            className="w-25 d-inline"
            alt="Weather icon"
          />
        </p>
        <p className="text-uppercase descStyles">
          {day.weather[0].description}
        </p>
        <p className="dateStyles">
          {new Date(day.dt * 1000).toLocaleDateString("EN-en", {
            weekday: "long",
          })}
        </p>
      </div>
    </li>
  );
}

export default ForecastCard;
