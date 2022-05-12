import React from "react";

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
      <React.Fragment>
        <div id="searchInfo">{`Results of search for the city: ${city}`}</div>
        <div id="time">{`Requested at: ${date}`}</div>
        <div id="temp">{`Actual temperature is: ${Math.round(temp)}`} &#176;C</div>
        <div id="sunrise">{`Sunrise is today at: ${sunriseTime}`}</div>
        <div id="sunset">{`Sunrise is today at: ${sunsetTime}`}</div>
        <div id="wind">{`Velocity of the wind is: ${wind} m/s`}</div>
        <div id="pressure">{`Pressure of air is: ${pressure} hPa`}</div>
      </React.Fragment>
    );
  }

  return (
    <div id="results" className="center">{err ? `Can't find ${city} in database` : content}</div> // short if statement to check err state is false or not 
  );
};

export default Result;