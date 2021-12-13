import {combineReducers} from "redux";
import {timeTempReducer} from "./timeTemperatureReducer";

export const rootReducer = combineReducers({
    timeTemperature: timeTempReducer
})