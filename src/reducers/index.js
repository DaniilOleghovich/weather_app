import {combineReducers} from "redux";
import {switchTemperatureFormat} from "./switchDegrees";

export const rootReducer = combineReducers({
    temperatureFormat: switchTemperatureFormat
})