import React from "react";
import "./WeatherResults.css";
import { Card, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CurrentWeatherCard from "../CurrentWeatherCard/CurrentWeatherCard";
const ForecastResult = (p) => {
  let content = (
    <div className="p-4 d-flex align-items-center justify-content-center h-25 mb-auto">
      <h1 className="noData display-6 fw-bold text-uppercase">No Data Yet</h1>
    </div>
  );
  const forecastElements = [];
  let keyArr = 0;
  // if we don't fetched any data don't display results card div
  if (!p.error && p.forecast.daily !== undefined) {
    p.forecast.daily.forEach((e) => {
      forecastElements.push(
        <Card key={keyArr++}>
          <Card.Img
            variant="top"
            src={`http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`}
          />
          <Card.Body>
            <Card.Text>{`Temp max: ${e.temp.max}`}</Card.Text>
          </Card.Body>
        </Card>
      );
    });
    content = (
      <React.Fragment>
        <div className="d-flex flex-column my-5">
          <h1 className="todayWeather display-5 fw-bold mt-auto mb-4">Today</h1>
          <CurrentWeatherCard data={p.forecast} />
          <h1 className="display-6 todayWeather mb-3 mt-5">
            More on {p.coordinates[0].name}
          </h1>
        </div>
      </React.Fragment>
    );
  }

  return (
    <div id="results" className="w-50 bgResults p-4">
      {p.error ? (
        <Alert
          variant="danger"
          className="w-25 text-center"
        >{`${p.alertText}`}</Alert>
      ) : (
        content
      )}
    </div>
  );
};

export default ForecastResult;
