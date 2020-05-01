export default class Bakery{
    constructor(name = "Simplon Bakery", cookies = 0, coockiesPerClick = 1, coockiesPerSecond = 0){
        this._name = name
        this._cookies = cookies
        this._coockiesPerClick = coockiesPerClick
        this._coockiesPerSecond = coockiesPerSecond
        this._buidlings = []
        }

    get name(){
        return this._name
    }

    get cookies(){
        return this._cookies
    }

    get coockiesPerClick(){
        return this._coockiesPerClick
    }

    get coockiesPerSecond(){
        return this._coockiesPerSecond
    }

    get buidlings(){
        return this._buidlings
    }
}

console.log("hello Bakery");