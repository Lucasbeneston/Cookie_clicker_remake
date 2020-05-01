export default class Building{
    constructor({name, description, cookiesPerSecond, cost}, number = 0) {
        this._name = name
        this._description = description
        this._number = number
        this._cookiesPerSecond = cookiesPerSecond
        this._cost = cost
    }


}

console.log("hello Building");