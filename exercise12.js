function Temperature(unit, value) {

    function getUnit() {
        return unit
    }

    function getValue() {
        return value
    }

    function convertToF() {
        if (unit == "C") {
            value = value * 1.8 + 32
            unit = "F"
          }

          return value
    }

    function convertToC() {
        if (unit == "F") {
           value = (value - 32) / 1.8
            unit = "C"
          }

          return value
    }

    return {
        getUnit,
        getValue,
        convertToF,
        convertToC
    }
}

function TemperaturePrediction(unit, minValue, maxValue) {

    function getUnit() {
        return unit
    }

    function getMinValue() {
        return minValue
    }

    function getMaxValue() {
        return maxValue
    }

    function matches(temp){
        if(temp.getUnit() == unit && temp.getValue() >= minValue && temp.getValue() <= maxValue){
            return true
        } else {
            return false
        }
    }

    function convertToF() {
        if (unit == "C") {
           value = value * 1.8 + 32
            unit = "F"
          }

          return value
    }

    function convertToC() {
        if (unit == "F") {
            value = (value - 32) / 1.8
            unit = "C"
          }

          return value
    }

    return {
        getUnit,
        getMinValue,
        getMaxValue,
        matches,
        convertToF,
        convertToC
    }
}

function Precipitation(unit, value, precipitationType) {

    function getUnit() {
        return unit
    }

    function getValue() {
        return value
    }

    function getPrecipitationType() {
        return precipitationType
    }

    function convertToInches() {
        if (unit === "mm") {
            value = value * 0.03937
            unit = "In"
          }

          return value
    }

    function convertToMM() {
        if (unit === "In") {
           value = value * 25.4
            unit = "mm"
          }

          return value
    }

    return {
        getUnit,
        getValue,
        getPrecipitationType,
        convertToInches,
        convertToMM
    }
}

//Testing
let s = Temperature("C", 25)
s.convertToF()
console.log(s.getValue())
console.log(s.getUnit())

let t = TemperaturePrediction("F", 0, 100)
let s2 = Temperature("F", 125)
console.log(t.matches(s))
console.log(t.matches(s2))

let rain = Precipitation("mm", 123, "Water")
console.log(rain.getUnit())
rain.convertToInches()
console.log(rain.getValue())
console.log(rain.getUnit())