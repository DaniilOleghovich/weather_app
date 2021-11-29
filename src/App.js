import './App.scss';
import Header from "./components/header/header";
import rainLogo from "./static/img/rain.png"
import {useState} from "react";
import {connect, useSelector} from 'react-redux'
import City from "./components/city/city";
import {switchDegreeAction} from "./actions/switchDegreeAction";
function App(props) {

    const timeOptions = {  weekday: 'long', hour: '2-digit', minute: '2-digit', hour12: false};

    const [city, setCity] = useState([
        {
            id: 1,
            city: 'London',
            date: new Date().toLocaleTimeString('en-us', timeOptions),
            degree: '12°C'
        }
        // {
        //     id: 2,
        //     city: 'Dublin',
        //     date: new Date().toLocaleTimeString('en-us', timeOptions),
        //     degree: '10°C'
        // },
        // {
        //     id: 3,
        //     city: 'Berlin',
        //     date: new Date().toLocaleTimeString('en-us', timeOptions),
        //     degree: '5°C'
        // }
    ])

    const [timeForecast, setTimeForecast] = useState([
        {
            id: 1,
            time: '08:00',
            icon: rainLogo,
            degree: '12°C'
        },
        {
            id: 1,
            time: '08:00',
            icon: rainLogo,
            degree: '12°C'
        },
        {
            id: 1,
            time: '08:00',
            icon: rainLogo,
            degree: '12°C'
        },
        {
            id: 1,
            time: '08:00',
            icon: rainLogo,
            degree: '12°C'
        },
        {
            id: 1,
            time: '08:00',
            icon: rainLogo,
            degree: '12°C'
        }
    ])

    // const counter = useSelector((state) => console.log(state.temperatureFormat))



    // console.log(props);

  return (
    <div className="App">
        <Header/>
        <City degree={props.degree} setTempFormat={props.setTempFormat}/>
    </div>
  );
}

const mapStateToProps = store => {
    return {
        degree: store.temperatureFormat
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setTempFormat: format => dispatch(switchDegreeAction(format))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
