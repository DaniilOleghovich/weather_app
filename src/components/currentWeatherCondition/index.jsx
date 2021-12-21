import React from 'react';
import {connect} from "react-redux";

const CurrentWeatherCondition = (props) => {

    return (
        <div>
            <div>
                Chance Of Rain
                {props.currentCondition.chanceOfRain}
            </div>
            <div>
                Humidity
                {props.currentCondition.humidity}
            </div>
            <div>
                Wind Speed
                {props.currentCondition.windSpeed}
            </div>
            <div>
                Visibility
                {props.currentCondition.visibility}
            </div>
            <div>
                Pressure
                {props.currentCondition.pressure}
            </div>
        </div>
    );
};

export default connect(
    (state) => ({currentCondition: state.currentCondition.weatherCondition})
)(CurrentWeatherCondition);