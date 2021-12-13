import './App.scss';
import Header from "./components/header/header";
import TimeTemperature from "./components/timeTemperature";

function App() {

    // const counter = useSelector((state) => console.log(state.temperatureFormat))

  return (
    <div className="App">
        <Header/>
        <TimeTemperature/>
    </div>
  );
}

export default App;
