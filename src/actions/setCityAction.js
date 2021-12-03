export const SET_CITY = 'SET_CITY';

export function setCityAction(cityInfo) {
    return {
        type: SET_CITY,
        payload: cityInfo
    }
}