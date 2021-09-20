function Event(Date, Place) {

    function getTime() {
        return Date
    }

    function getPlace() {
        return Place
    }


    return {
        getTime,
        getPlace
    }
}

function DataType(Type, Unit) {

    function getType() {
        return Type
    }

    function getPlace() {
        return Unit
    }


    return {
        getType,
        getUnit
    }
}

function WeatherData(Date, Place, Type, Unit, Value) {

    const state = {Date}

    function getType() {
        return Type
    }



    return {
        getType,
        getUnit
    }
}