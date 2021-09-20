class EventData {
    constructor(Date, Place, Type, Unit) {
        this.Date = Date
        this.Place = Place
        this.Type = Type
        this.Unit = Unit
    }

    getTime() {
        return this.Date
    }

    getPlace() {
        return this.Place
    }

    getType() {
        return this.Type
    }

    getUnit() {
        return this.unit
    }
}

class WeatherData extends EventData {
    constructor(Data, Place, type, unit, value) {
        super(licensePlate, model)
        this.batteryCapacity = batteryCapacity
    }

    batteryLife(consumption) {
        return this.batteryCapacity / consumption
    }
}