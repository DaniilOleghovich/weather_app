import {CELSIUS, FAHRENHEIT} from "./constants";

export const calculateTime = (hour) => Date.now() + 60 * 60 * 1000 * hour;

export const calculateDegree = (format, timeCondition) => {
    switch (format) {
        case CELSIUS:
            return timeCondition.celsiusDegree
        case FAHRENHEIT:
            return timeCondition.fahrenheitDegree
        default:
            return;
    }
}
