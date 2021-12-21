import React from 'react';
import './header.scss';
import logo from "../../static/img/logo.png"
import search from "../../static/img/search.png"
import {connect} from "react-redux";
import {timeTempAction} from "../../reducers/timeTemperatureReducer";
import {CELSIUS, FAHRENHEIT} from "../../constants";

const Header = (props) => {

    const setTempFormat = () => {
        props.onSwitchFormat(props.degreeFormat === CELSIUS ? FAHRENHEIT : CELSIUS);
    }

    const buttonSearchHandler = (e) => {
        console.log('Clicked');
    }

    return (
        <div className="header">
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
                    <button
                        onClick={buttonSearchHandler}
                    >
                        <img src={search} alt="search"/>
                    </button>
                </div>
                <div
                    className="header-wrapper__switch"
                    onClick={setTempFormat}
                >
                    <p
                        className={`celsius ${props.degreeFormat === CELSIUS && 'switched'}`}
                    >
                        °C
                    </p>
                    <p className="slash">
                        /
                    </p>
                    <p
                        className={`fahrenheit ${props.degreeFormat === FAHRENHEIT && 'switched'}`}
                    >
                        °F
                    </p>
                </div>
            </div>
        </div>
    );
};

export default connect(
    (state) => ({degreeFormat: state.timeTemperature.format}),
    (dispatch) => ({onSwitchFormat: (format) => {dispatch(timeTempAction(format))}})
)(Header);
