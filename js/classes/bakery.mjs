import { buildings } from "../data.mjs"

export default class Bakery{
    constructor(name = "Simplon Bakery", cookies = 0, cookiesPerClick = 1, cookiesPerSecond = 0){
        this._name = name
        this._cookies = cookies
        this._cookiesPerClick = cookiesPerClick
        this._cookiesPerSecond = cookiesPerSecond
        this._buidlings = []
        }

    // bakeCookies(){
    //     return this._cookies += this.cookiesPerClick 
    bakeCookies(howMany){
        howMany = this.cookiesPerClick
        return this._cookies += howMany
    }
    
    get name(){
        return this._name
    }

    get cookies(){
        return this._cookies
    }

    get cookiesPerClick(){
        return this._cookiesPerClick
    }

    get cookiesPerSecond(){
        return this._cookiesPerSecond
    }

    get buidlings(){
        return this._buidlings
    }
}