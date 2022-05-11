import React, { Component } from 'react'

const Result = props => {
    const {
        date,
        city,
        sunrise,
        sunset,
        temp,
        pressure,
        wind,
        err
    } = props.weather
    return (
        <React.Fragment>
            <div id='city'>Weather for: {city}</div>
            <div id='temp'>Temperature is: {temp}</div>
        </React.Fragment>
    )
}

export default Result;