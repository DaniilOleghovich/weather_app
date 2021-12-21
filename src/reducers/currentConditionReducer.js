export const initialState = {
    weatherCondition: {
        chanceOfRain: '12%',
        humidity: '60%',
        windSpeed: '10 k/h',
        visibility: '100km',
        pressure: '1015 hPa'
    }
}

const SET_CURRENT_CONDITION = 'SET_CURRENT_CONDITION';

export const currentConditionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_CONDITION:
            return {...state, weatherCondition: action.payload.condition}
        default:
             return state
    }
}

export const setCurrentCondition = (condition) => ({type: SET_CURRENT_CONDITION, payload: {condition}})