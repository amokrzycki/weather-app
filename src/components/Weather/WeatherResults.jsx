import React from "react";
import "./WeatherResults.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ForecastCard from "../ForecastCard/ForecastCard";
import Result from "../Result/Result";

const ForecastResult = (p) => {
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
  }

  return (
    <div id="results" className="w-50 bgResults p-4">
      {p.error ? (
        <div className="p-4 d-flex align-items-center justify-content-center h-25 mb-auto text-center">
          <h1 className="errorStyle display-6 fw-bold text-uppercase">{`${p.alertText}`}</h1>
        </div>
      ) : p.forecast.daily === undefined ? (
        <div className="p-4 d-flex align-items-center justify-content-center h-25 mb-auto">
          <h1 className="noData display-6 fw-bold text-uppercase">
            No Data Yet
          </h1>
        </div>
      ) : (
        <Result
          city={p.coordinates[0].name}
          country={p.coordinates[0].country}
          tiles={forecastElements}
          forecast={p.forecast}
        />
      )}
    </div>
  );
};

export default ForecastResult;
