import React from 'react';
import {connect} from "react-redux";
import {calculateDegree} from "../../helpers";

const TimeTemperature = (props) => {

    const [currentCondition, ...restCondition] = props.timeCondition;

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
                    <p key={ Math.random() + props.timeCondition.length}>
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