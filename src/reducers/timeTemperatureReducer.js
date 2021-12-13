import {CELSIUS} from "../constants";
import {calculateTime} from "../helpers";

const initialState = {
    format: CELSIUS,
    degree: [
        {
            time: calculateTime(0),
            celsiusDegree: 20,
            fahrenheitDegree: 68
        },
        {
            time: calculateTime(1),
            celsiusDegree: 21,
            fahrenheitDegree: 70
        },
        {
            time: calculateTime(2),
            celsiusDegree: 22,
            fahrenheitDegree: 72
        },
        {
            time: calculateTime(3),
            celsiusDegree: 23,
            fahrenheitDegree: 74
        }
    ]
}

const SWITCH_FORMAT = 'SWITCH_FORMAT'

export const timeTempReducer = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_FORMAT:
            return {...state, format: action.payload.format}
        default:
            return state
    }
}

export const timeTempAction = (format) => ({type: SWITCH_FORMAT, payload: {format}})