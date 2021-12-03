import './App.scss';
import TimeConditionContainer from "./containers/timeConditionContainer";
import HeaderContainer from "./containers/headerContaineer";

function App() {

    // const counter = useSelector((state) => console.log(state.temperatureFormat))

  return (
    <div className="App">
        <HeaderContainer/>
        <TimeConditionContainer/>
    </div>
  );
}

export default App;
