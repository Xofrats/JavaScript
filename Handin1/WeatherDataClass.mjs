import { EventDataType } from "./EventDataTypeClass.mjs";

class weatherDataClass extends EventDataType {
    constructor(value, time, place, type, unit) {
        super(time, place, type, unit)
        this.value = value
    }

    getValue() {
        return this.value
    }
}

export {weatherDataClass}