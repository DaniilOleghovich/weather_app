import {GET_TEMP_CONDITION} from "../actions/getTemperatureConditionAction";
import {SET_TEMP_CONDITION} from "../actions/setTemperatureConditionAction";

const initialState = {
    temperatureCondition: [
        {
            time: '08:00',
            weatherConditions: 'wind',
            temperature: '12°C'
        }
    ]
}

export const temperatureByTimeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TEMP_CONDITION:
            return {...state, temperatureCondition: action.payload}
        case SET_TEMP_CONDITION:
            return {...state, temperatureCondition: state + action.payload}
        default:
            return state
    }
}