import React, {useState} from 'react';

const City = (props) => {
    console.log(props);
    const [isSwitched, setIsSwitched] = useState(false);
    const setTempFormat = () => {
        setIsSwitched(!isSwitched);
        console.log(isSwitched)

        if (isSwitched) {
            props.setTempFormat('celsius')
        } else {
            props.setTempFormat('fahrenheit')
        }
    }
    return (
        <div>
            <button onClick={() => setTempFormat()}>
                Set Format
            </button>
            {props.degree.temperatureFormat}
        </div>
    );
};

export default City;