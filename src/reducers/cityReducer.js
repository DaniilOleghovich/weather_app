import {GET_CITY} from "../actions/getCityAction";
import {SET_CITY} from "../actions/setCityAction";

const initialState = {
    cities: [
        {
            name: 'London',
            currentDay: 'Sunday',
            currentTime: '07:09',
            temperature: '12°C'
        },
        {
            name: 'Canada',
            currentDay: 'Monday',
            currentTime: '07:09',
            temperature: '10°C'
        }
    ]
}

export const cityReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CITY:
            return {...state, cities: action.payload}
        case SET_CITY:
            return {...state, cities: state + action.payload}
        default:
            return state
    }
}
