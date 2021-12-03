export const SET_TEMP_CONDITION = 'SET_TEMP_CONDITION';

export function setTempConditionAction(condition) {
    return {
        type: SET_TEMP_CONDITION,
        payload: condition
    }
}