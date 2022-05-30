import React from "react";
import "./WeatherResults.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CurrentWeatherCard from "../CurrentWeatherCard/CurrentWeatherCard";
import ForecastCard from "../ForecastCard/ForecastCard";

const ForecastResult = (p) => {
  let content = (
    <div className="p-4 d-flex align-items-center justify-content-center h-25 mb-auto">
      <h1 className="noData display-6 fw-bold text-uppercase">No Data Yet</h1>
    </div>
  );
  const forecastElements = [];
  // if we don't fetched any data don't display results card div
  if (
    !p.error &&
    p.forecast.daily !== undefined &&
    p.coordinates[0] !== undefined
  ) {
    for (let i = 1; i < 7; i++) {
      forecastElements.push(
        <ForecastCard day={p.forecast.daily[i]} key={i - 1} />
      );
    }
    content = (
      <React.Fragment>
        <div className="d-flex flex-column">
          <h1 className="todayWeather display-5 fw-bold mt-auto mb-4">Today</h1>
          <CurrentWeatherCard data={p.forecast} />
          <h1 className="display-6 forecastWeather mb-3 mt-5">
            More on {p.coordinates[0].name}, {p.coordinates[0].country}
          </h1>
          <ul className="forecastStyles">{forecastElements}</ul>
        </div>
      </React.Fragment>
    );
  }

  return (
    <div id="results" className="w-50 bgResults p-4">
      {p.error ? (
        <div className="p-4 d-flex align-items-center justify-content-center h-25 mb-auto text-center">
          <h1 className="errorStyle display-6 fw-bold text-uppercase">{`${p.alertText}`}</h1>
        </div>
      ) : (
        content
      )}
    </div>
  );
};

export default ForecastResult;
