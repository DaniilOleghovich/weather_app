export const GET_CITY = 'GET_CITY';

export function getCityAction(cityInfo) {
    return {
        type: GET_CITY,
        payload: cityInfo
    }
}