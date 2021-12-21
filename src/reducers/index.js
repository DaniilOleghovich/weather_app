import {combineReducers} from "redux";
import {timeTempReducer} from "./timeTemperatureReducer";
import {currentConditionReducer} from "./currentConditionReducer";
import {dayConditionReducer} from "./dayConditionReducer";

export const rootReducer = combineReducers({
    timeTemperature: timeTempReducer,
    currentCondition: currentConditionReducer,
    dayWeatherCondition: dayConditionReducer
})