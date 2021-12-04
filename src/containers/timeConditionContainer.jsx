import React from 'react';
import TimeCondition from "../components/timeCondition/timeCondition";
import {connect} from "react-redux";

const TimeConditionContainer = (props) => {
    return (
        <div>
            {props.cities.cities.map((city) =>
                <TimeCondition city={city}/>
            )}

        </div>
    );
};

const mapStateToProps = store => {
    return {
        cities: store.city
    }
}

export default connect(mapStateToProps)(TimeConditionContainer);
