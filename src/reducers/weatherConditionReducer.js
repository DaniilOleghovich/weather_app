const GET = 'GET';

const defaultState = {

}

export const weatherConditionReducer = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export const getConditionAction = (conditions) => {
    return {
        type: GET,
        payload: {conditions}
    }
}