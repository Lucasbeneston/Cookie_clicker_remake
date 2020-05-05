export default class Building{
    constructor(name, description, cookiesPerSecond, cost, number = 0) {
        this._name = name
        this._description = description
        this._cookiesPerSecond = cookiesPerSecond
        this._cost = cost
        this._number = number
    }

    buy(){
        this._number++
        this._cost = Math.ceil(this._cost * 1.15);
    }

    get name(){
        return this._name
    }

    get description(){
        return this._description
    }

    get cookiesPerSecond(){
        return this._cookiesPerSecond
    }

    get cost(){
        return this._cost
    }

    get number(){
        return this._number
    }

    set number(newNumber){
        this._number = newNumber
    }

    set cost(newCost){
        this._cost = newCost
    }
}