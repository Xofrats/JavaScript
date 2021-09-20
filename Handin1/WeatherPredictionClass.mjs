import { EventDataType } from "./EventDataTypeClass.mjs";
import {weatherDataClass} from  "./WeatherDataClass.mjs"

class weatherPrediction extends EventDataType {
    constructor(minValue, maxValue, time, place, type, unit) {
        super(time, place, type, unit)
        this.minValue = minValue
        this.maxValue = maxValue
    }

    getMin() {
        return this.minValue
    }

    getMax() {
        return this.maxValue
    }

    matches(weatherDataClass){
        if(weatherDataClass.getTime() === this.time && weatherDataClass.getPlace() === this.place && weatherDataClass.getType() === this.type && weatherDataClass.getUnit() === this.unit && weatherDataClass.getValue() >= this.minValue && weatherDataClass.getValue() <= this.maxValue){
            return true
        } else {
            return false
        }
    }
}

export {weatherPrediction}

// let weather = new weatherDataClass(20, 2000, "VIA", "Rain", "mm")
// console.log(weather.getType())

//     let prediction = new weatherPrediction(25, 10, 2000, "VIA", "Rain", "mm")
//     let prediction2 = new weatherPrediction(15, 10, 2000, "VIA", "Rain", "mm")

//     console.log(prediction.getType())
//     console.log(prediction.matches(weather))
//     console.log(prediction2.matches(weather))