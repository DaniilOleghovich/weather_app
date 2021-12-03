export const GET_TEMP_CONDITION = 'GET_TEMP_CONDITION';

export function getTempConditionAction(condition) {
    return {
        type: GET_TEMP_CONDITION,
        payload: condition
    }
}