import {combineReducers} from "redux";
import {switchTemperatureFormat} from "./switchDegrees";
import {cityReducer} from "./cityReducer";
import {temperatureByTimeReducer} from "./temperatureByTime";

export const rootReducer = combineReducers({
    temperatureFormat: switchTemperatureFormat,
    city: cityReducer,
    temperature: temperatureByTimeReducer
})