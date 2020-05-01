// import {buildings} from "js/data.mjs"

export default class Building{
    constructor({name, description, cookiesPerSecond, cost}, number = 0) {
        this._name = name
        this._description = description
        this._cookiesPerSecond = cookiesPerSecond
        this._cost = cost
        this._number = number
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
}