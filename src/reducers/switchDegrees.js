import {SWITCH_TEMPERATURE_FORMAT} from '../actions/switchDegreeAction';

const initialState = {
    temperatureFormat: 20
}

export const switchTemperatureFormat = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_TEMPERATURE_FORMAT:
            return {...state, temperatureFormat: action.payload}
        default:
            return state;
    }
}