import React from 'react';
import {connect} from "react-redux";
import {CELSIUS} from "../../constants";

const TimeTemperature = (props) => {

    const [currentCondition, ...restCondition] = props.timeCondition;

    return (
        <div>
            <p>
                Current: {currentCondition.time}
                +
                {props.format === CELSIUS ?
                    currentCondition.celsiusDegree :
                    currentCondition.fahrenheitDegree
                }
            </p>
            {
                restCondition.map((timeDegree) => (
                    <p>
                        {timeDegree.time}
                        +
                        {props.format === CELSIUS ?
                            timeDegree.celsiusDegree :
                            timeDegree.fahrenheitDegree
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