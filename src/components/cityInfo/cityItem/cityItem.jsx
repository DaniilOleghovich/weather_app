import React from 'react';
import './cityItem.scss'

const CityItem = (props) => {
    return (
        <div className="cityItem-wrapper">
            <p>{props.city.city}</p>
            <p>{props.city.date}</p>
            <p>{props.city.degree}</p>

        </div>
    );
};

export default CityItem;