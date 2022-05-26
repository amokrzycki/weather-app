import React from "react";
import "./WeatherResults.css";
import { Card, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ForecastResult = (p) => {
  const sunriseTime = new Date(p.sunrise * 1000).toLocaleTimeString(); // unix time sended by API have lack of three zeros, we need to multiplicate it by 1000
  const sunsetTime = new Date(p.sunset * 1000).toLocaleTimeString();
  const requestDate = new Date().toLocaleString();
  let content = (
    <div className="p-4 d-flex align-items-center justify-content-center h-25 mb-auto">
      <h1 className="noData display-6 fw-bold text-uppercase">No Data Yet</h1>
    </div>
  );
  const forecastElements = [];
  let keyArr = 0;
  // if we don't fetched any data don't display results card div
  if (!p.error && p.forecast.daily !== undefined && p.temp !== undefined) {
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
        <div className="actualWeatherWrapper d-flex flex-column my-5 w-100 p-3">
          <h1 className="todayWeather display-5 fw-bold mt-auto mb-4">Today</h1>
          <div className="actualWeather">
            <Card style={{ color: "black" }}>
              <Card.Body className="center">
                <Card.Title>{`Results of search for the city: ${p.city}`}</Card.Title>
                <Card.Text>{`Requested at: ${requestDate}`}</Card.Text>
                <Card.Text>
                  {`Actual temperature is: ${Math.round(p.temp)}`} &#176;C
                </Card.Text>
                <Card.Text>
                  {`The perceptible temperature is: ${Math.round(p.feelsLike)}`}{" "}
                  &#176;C
                </Card.Text>
                <Card.Text>{`Sunrise is today at: ${sunriseTime}`}</Card.Text>
                <Card.Text>{`Sunset is today at: ${sunsetTime}`}</Card.Text>
                <Card.Text>{`Velocity of the wind is: ${p.wind} m/s`}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="actualForecast d-flex justify-content-around">
          {forecastElements}
        </div>
      </React.Fragment>
    );
  }

  return (
    <div
      id="results"
      className="d-flex flex-column align-items-center justify-content-center w-50 bgResults h-100"
    >
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
