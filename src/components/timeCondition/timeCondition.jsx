import React, {useState} from 'react';

const TimeCondition = (props) => {

    console.log(props)

    // const [cities, setCities] = useState([
    //     {
    //         name: 'London',
    //         currentDay: 'Sunday',
    //         currentTime: '07:09',
    //         temperature: '12°C'
    //     }
    // ])
    //
    // const [timeForecast, setTimeForecast] = useState([
    //     {
    //         time: '08:00',
    //         weatherConditions: 'wind',
    //         temperature: '12°C'
    //     }
    // ])

    return (
        <div>
            {props.city.name}
        </div>
    );
};

export default TimeCondition;
