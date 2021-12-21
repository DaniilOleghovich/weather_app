import './App.scss';
import Header from "./components/header/header";
import TimeTemperature from "./components/timeTemperature";
import CurrentWeatherCondition from "./components/currentWeatherCondition";
import DayCondition from "./components/dayCondition";

function App() {

    // const counter = useSelector((state) => console.log(state.temperatureFormat))

  return (
    <div className="App">
        <Header/>
        <TimeTemperature/>
        <CurrentWeatherCondition/>
        <DayCondition/>
    </div>
  );
}

export default App;
