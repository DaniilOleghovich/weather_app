import './App.scss';
import Header from "./components/header/header";
import TimeTemperature from "./components/timeTemperature";
import CurrentWeatherCondition from "./components/currentWeatherCondition";
import DayCondition from "./components/dayCondition";
import AddNewCity from "./components/newCity";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function App() {

    // const counter = useSelector((state) => console.log(state.temperatureFormat))

  return (
    <div className="App">
        <div>
            <div style={{ marginBottom: "20px" }}>
                <Skeleton height={50} />
            </div>
            <Skeleton count={5} />
        </div>
        <Header/>
        <TimeTemperature/>
        <CurrentWeatherCondition/>
        <DayCondition/>
        <AddNewCity/>
    </div>
  );
}

export default App;
