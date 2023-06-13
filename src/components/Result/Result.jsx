import React from "react";
import CurrentWeatherCard from "../CurrentWeatherCard/CurrentWeatherCard";

const Result = (props) => {
  return (
    <React.Fragment>
      <div className="d-flex flex-column">
        <h1 className="todayWeather display-5 fw-bold mt-auto mb-4">Today</h1>
        <CurrentWeatherCard data={props.forecast} />
        <h1 className="display-6 forecastWeather mb-3 mt-5">
          More on {props.city}, {props.country}
        </h1>
        <ul className="forecastStyles">{props.tiles}</ul>
      </div>
    </React.Fragment>
  );
};

export default Result;
