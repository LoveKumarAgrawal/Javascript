// A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.
// It is our own implementation of the builtin functions in javascript.

// Polyfill for map()

Array.prototype.myMap = function (cb) {
    let temp = []
    for(let i=0;i<this.length;i++) {
        temp.push(cb(this[i], i, this))
    }
    return temp
}

// Polyfill for filter()

Array.prototype.myFilter = function (cb) {
    let temp = []
    for(let i=0;i<this.length;i++) {
        if(cb(this[i], i, this)) temp.push(this[i])
    }

    return temp
}

// Polyfill for reduce()

Array.prototype.myReduce = function (cb, initialValue) {
    let accumulator = initialValue;
    for(let i=0;i<this.length;i++) {
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i]
    }
    return accumulator
}