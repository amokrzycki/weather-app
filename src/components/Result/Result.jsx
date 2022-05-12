import React from "react";
import "./Result.css";
import { Alert, Card } from "react-bootstrap";
const Result = (props) => {
  // destructuring weather props to easier get our properties
  const { date, city, sunrise, sunset, temp, pressure, wind, err } =
    props.weather;

  // initalize content to show results
  let content = null;

  if (!err && city) {
    // API sends us sunrise and sunset time in unix time we need to convert it
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString(); // unix time sended by API have lack of three zeros, we need to multiplicate it by 1000
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    content = (
      <Card style={{ color: "black" }}>
        <Card.Body className="center">
          <Card.Title>Weather</Card.Title>
          <Card.Text>{`Results of search for the city: ${city}`}</Card.Text>
          <Card.Text>{`Requested at: ${date}`}</Card.Text>
          <Card.Text>
            {`Actual temperature is: ${Math.round(temp)}`} &#176;C
          </Card.Text>
          <Card.Text>{`Sunrise is today at: ${sunriseTime}`}</Card.Text>
          <Card.Text>{`Sunset is today at: ${sunsetTime}`}</Card.Text>
          <Card.Text>{`Velocity of the wind is: ${wind} m/s`}</Card.Text>
          <Card.Text>{`Pressure of air is: ${pressure} hPa`}</Card.Text>
        </Card.Body>
      </Card>
    );
  }

  return (
    <div id="results" className="center">
      {err ? (
        <Alert variant="danger">{`Can't find ${city} in database`}</Alert>
      ) : (
        content
      )}
    </div> // short if statement to check err state is false or not
  );
};

export default Result;
