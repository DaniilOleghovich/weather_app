import './App.scss';
import 'react-loading-skeleton/dist/skeleton.css'
import {useEffect} from "react";
import axios from "axios";
import {URL} from "./constants";

function App() {

    const getConditions = async () => {
        return await axios.get(URL);
    }

    useEffect(() => {
        getConditions()
            .then(resp => console.log(resp.data));
    }, [])

    return (
        <div>

        </div>
    )
}

export default App;


