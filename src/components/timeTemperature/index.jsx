import React from 'react';
import {connect} from "react-redux";
import {CELSIUS, FAHRENHEIT} from "../../constants";

const TimeTemperature = (props) => {

    const [currentCondition, ...restCondition] = props.timeCondition;

    const calculateDegree = (format, timeCondition) => {
        switch (format) {
            case CELSIUS:
                return timeCondition.celsiusDegree
            case FAHRENHEIT:
                return timeCondition.fahrenheitDegree
            default:
                return;
        }
    }

    return (
        <div>
            <p>
                Current: {currentCondition.time}
                +

                {
                    calculateDegree(props.format, currentCondition)
                }
            </p>
            {
                restCondition.map((timeDegree) => (
                    <p>
                        {timeDegree.time}
                        +
                        {
                            calculateDegree(props.format, timeDegree)
                        }
                    </p>
                ))
            }
        </div>
    );
};



export default connect(
    (state) => ({
        format: state.timeTemperature.format,
        timeCondition: state.timeTemperature.degree,
    })
)(TimeTemperature);