import './App.scss';
import Header from "./components/header/header";
import TimeTemperature from "./components/timeTemperature";
import CurrentWeatherCondition from "./components/currentWeatherCondition";
import DayCondition from "./components/dayCondition";
import AddNewCity from "./components/newCity";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import axios from "axios";

function App() {

    // const counter = useSelector((state) => console.log(state.temperatureFormat))

    const getTimeTemperature = () => {
        axios.get(`http://localhost:8080/time/temperature`)
            .then(res => {
                console.log(res.data);
            })
    }

    const getDayCondition = () => {
        axios.get(`http://localhost:8080/day/condition`)
            .then(res => {
                console.log(res.data);
            })
    }

    const getCurrentCondition = () => {
        axios.get(`http://localhost:8080/current/condition`)
            .then(res => {
                console.log(res.data);
            })
    }

  return (
    <div className="App">
        <button
            onClick={() => getTimeTemperature()}
        >
            Get Time Temperature
        </button>
        <button
            onClick={() => getDayCondition()}
        >
            Get Day Condition
        </button>
        <button
            onClick={() => getCurrentCondition()}
        >
            Get Current Condition
        </button>
        {/*<div>*/}
        {/*    <div style={{ marginBottom: "20px" }}>*/}
        {/*        <Skeleton height={50} />*/}
        {/*    </div>*/}
        {/*    <Skeleton count={5} />*/}
        {/*</div>*/}
        <Header/>
        <TimeTemperature/>
        <CurrentWeatherCondition/>
        <DayCondition/>
        <AddNewCity/>
    </div>
  );
}

export default App;
