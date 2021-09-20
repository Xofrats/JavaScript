import { event, dataType } from "./EventDataTypeMixin.mjs";

function weatherData(value, time, place, type, unit) {

    function getValue() {
        return value
    }

    const eventFunction = event(time, place)
    const dataTypeFunction = dataType(type, unit)

    return {...eventFunction, ...dataTypeFunction, getValue}
}

export {weatherData}