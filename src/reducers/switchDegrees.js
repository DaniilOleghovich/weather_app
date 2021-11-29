const initialState = {
    temperatureFormat: 'celsius'
}

const SWITCH_TEMPERATURE_FORMAT = 'SWITCH_TEMPERATURE_FORMAT';

export const switchTemperatureFormat = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_TEMPERATURE_FORMAT:
            return {...state, temperatureFormat: action.payload}
        default:
            return state;
    }
}