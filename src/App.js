import './App.scss';
import Header from "./components/header/header";
import CityInfo from "./components/cityInfo/cityInfo";
import rainLogo from "./static/img/rain.png"
import {useState} from "react";

function App() {

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

  return (
    <div className="App">
        <Header/>
        <CityInfo city={city} timeForecast={timeForecast}/>
    </div>
  );
}

export default App;
