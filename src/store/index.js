import {createStore, combineReducers} from "redux";
import {weatherConditionReducer} from "../reducers/weatherConditionReducer";

const rootReducer = combineReducers({
    weatherCondition: weatherConditionReducer
})

export const store = createStore(rootReducer);