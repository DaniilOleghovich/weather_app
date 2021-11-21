import React from 'react';
import './cityInfo.scss';
import CityItem from "./cityItem/cityItem";
import HourForecastItem from "./hourForecastItem/hourForecastItem";

const CityInfo = (props) => {
    return (
        <div className="city-wrapper">
            <div className="city">
                {
                    props.city.map(city =>
                        <CityItem
                            city={city}
                            key={city.id}/>
                    )
                }
            </div>

            <div className="forecast">
                {
                    props.timeForecast.map(forecast =>
                        <HourForecastItem
                            forecast={forecast}
                            key={forecast.id}/>
                    )
                }
            </div>
        </div>
    );
};

export default CityInfo;