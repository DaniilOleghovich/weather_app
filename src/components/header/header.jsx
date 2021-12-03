import React, {useState} from 'react';
import './header.scss';
import logo from "../../static/img/logo.png"
import search from "../../static/img/search.png"

const Header = (props) => {

    const [isFahrenheitSwitched, setIsFahrenheitSwitched] = useState(false);

    const switchToCelsius = (degree) => {
        let value = parseFloat(degree);
        return (value * 1.8) + 32 ;
    }
    const switchToFahrenheit = (degree) => {
        let value = parseFloat(degree);
        return (value - 32) / 1.8 ;
    }

    const setTempFormat = () => {
        setIsFahrenheitSwitched(!isFahrenheitSwitched);
        if (!isFahrenheitSwitched) {
            props.setTempFormat(switchToCelsius(props.degree.temperatureFormat))
        } else {
            props.setTempFormat(switchToFahrenheit(props.degree.temperatureFormat))
        }
    }


    const buttonSearchHandler = (e) => {
        console.log('Clicked');
    }

    return (
        <div className="header-wrapper">
            <div className="header-wrapper__logo">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="text">
                    WeatherApp
                </div>
            </div>
            <div className="header-wrapper__search">
                <input type="text"/>
                <button onClick={buttonSearchHandler}>
                    <img src={search} alt="search"/>
                </button>
            </div>
            <div
                className="header-wrapper__switch"
                onClick={setTempFormat}
            >
                <p
                    className={isFahrenheitSwitched ? 'celsius' : 'celsius switched'}
                >
                    °C
                </p>
                <p className="slash">
                    /
                </p>
                <p
                    className={!isFahrenheitSwitched ? 'fahrenheit' : 'fahrenheit switched'}
                >
                    °F
                </p>
            </div>
        </div>
    );
};

export default Header;