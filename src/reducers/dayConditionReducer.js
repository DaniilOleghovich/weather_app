export const initialState = {

    dayCondition: [
        {
            id: 1,
            day: 'Monday',
            condition: {
                chanceOfRain: '9%',
                humidity: '57%',
                wind: '10 k/h',
                celsiusDegree: 19,
                fahrenheitDegree: 45
            }
        },
        {
            id: 2,
            day: 'Tuesday',
            condition: {
                chanceOfRain: '9%',
                humidity: '57%',
                wind: '10 k/h',
                celsiusDegree: 19,
                fahrenheitDegree: 45
            }
        }

    ]

}

const SET_DAY_CONDITION = 'SET_DAY_CONDITION';

export const dayConditionReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_DAY_CONDITION:
            return {...state, }

        default:
             return state
    }
}