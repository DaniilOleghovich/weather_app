export const SWITCH_TEMPERATURE_FORMAT = 'SWITCH_TEMPERATURE_FORMAT';

export const switchDegreeAction = (format) => {
    return {
        type: SWITCH_TEMPERATURE_FORMAT,
        payload: format
    }
}