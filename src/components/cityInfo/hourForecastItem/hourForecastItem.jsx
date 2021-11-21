import React from 'react';
import './hourForecastItem.scss'

const HourForecastItem = (props) => {
    return (
        <div className="forecast-wrapper">
            <p>{props.forecast.time}</p>
            <img src={props.forecast.icon} alt="weather logo" />
            <p>{props.forecast.degree}</p>
        </div>
    );
};

export default HourForecastItem;