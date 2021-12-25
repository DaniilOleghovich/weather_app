import React from 'react';
import './index.scss';
import axios from "axios";

const addNewCity = () => {
    axios.get(`http://localhost:8080/time/temperature`)
        .then(res => {
            console.log(res);
        })
}


const AddNewCity = () => {
    return (
        <div className="wrapper">
            <div className="wrapper-button">
                <div className="wrapper-button_circle">
                    +
                </div>
                <div
                    onClick={() => addNewCity()}
                    className="wrapper-button_text">
                    Add more cities
                </div>
            </div>
        </div>
    );
};

export default AddNewCity;