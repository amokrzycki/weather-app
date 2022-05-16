import React from "react";
import "./Result.css";
import { Card } from "react-bootstrap";

const requestDate = new Date().toLocaleString();

const Result = (p) => {
  // API sends us sunrise and sunset time in unix time we need to convert it
  const sunriseTime = new Date(p.sunrise * 1000).toLocaleTimeString(); // unix time sended by API have lack of three zeros, we need to multiplicate it by 1000
  const sunsetTime = new Date(p.sunset * 1000).toLocaleTimeString();
  let content = null;
  if (p.temp !== undefined) {
    content = (
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
    );
  }

  return (
    <div id="results" className="center">
      {content}
    </div>
  );
};

export default Result;
