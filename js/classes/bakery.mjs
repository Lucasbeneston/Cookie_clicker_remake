export default class Bakery{
    constructor(name = "Simplon Bakery", cookies = 0, cookiesPerClick = 1, cookiesPerSecond = 0){
        this._name = name
        this._cookies = cookies
        this._cookiesPerClick = cookiesPerClick
        this._cookiesPerSecond = cookiesPerSecond
        this._buidlings = []
        }

    bakeCookies(){
        return this._cookies += this.cookiesPerClick 
        // this._cookies = this._cookies + this.cookiesPerClick
        // this._cookies = 0 + 1
        // this._cookies = 1 + 1
        // this._cookies = 2 + 1
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