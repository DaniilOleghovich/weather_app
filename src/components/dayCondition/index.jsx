import React from 'react';
import {connect} from "react-redux";
import {calculateDegree} from "../../helpers";

const DayCondition = (props) => {

    const [monday, tuesday, wednesday, thursday, friday, sunday, saturday] = props.dayConditions
    return (
        <div>
            DAY:
            {monday.day}
            <br/>
            CHANCE OF RAIN:
            {monday.condition.chanceOfRain}
            <br/>
            HUMIDITY:
            {monday.condition.humidity}
            <br/>
            WIND:
            {monday.condition.wind}
            <br/>
            TEMPERATURE:
            {
                calculateDegree(props.format, monday.condition)
            }
        </div>
    );
};

export default connect(
    (state) => ({
        dayConditions: state.dayWeatherCondition.dayCondition,
        format: state.timeTemperature.format
    })
)(DayCondition);