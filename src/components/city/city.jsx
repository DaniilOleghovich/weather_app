import React from 'react';

const City = (props) => {
    return (
        <div>
            {props.degree.temperatureFormat}
        </div>
    );
};

export default City;