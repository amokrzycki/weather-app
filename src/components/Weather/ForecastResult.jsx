import React from "react";
import "./WeatherResult.css";
import { Card, Alert } from "react-bootstrap";

const ForecastResult = (p) => {
  let content = null;
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
            <Card.Text>{`Temp min: ${e.temp.min}`}</Card.Text>
            <Card.Text>{`Temp max: ${e.temp.max}`}</Card.Text>
          </Card.Body>
        </Card>
      );
    });
    content = <React.Fragment>{forecastElements}</React.Fragment>;
  }

  return (
    <div id="results" className="d-flex flex-row justify-content-around vw-100">
      {p.error ? <Alert variant="danger">{`${p.alertText}`}</Alert> : content}
    </div>
  );
};

export default ForecastResult;
