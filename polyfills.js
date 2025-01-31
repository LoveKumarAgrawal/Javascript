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

// Polyfill for call()

Function.prototype.myCall = function(context={}, ...args) {
    if(typeof this !== "function") {
        throw new Error(this + "it is not callable")
    }
    context.fn = this
    context.fn(...args)
}

// Polyfill for apply()

Function.prototype.myApply = function(context={}, args=[]) {
    if(typeof this !== "function") {
        throw new Error(this + "It's not callable")
    }
    if(!Array.isArray(args)) {
        throw new Error("CreateListFromArrayLike called on non-object")
    }
    context.fn = this
    context.fn(...list)
}

// Polyfill for bind()

Function.prototype.myBind = function(context={}, ...args) {
    if(typeof this !== "function") {
        throw new Error(this + "cannot be bound as it's not callable")
    }
    context.fn = this

    return function(...args2) {
        return context.fn(...args2, ...args)
    }
}

// Polyfill for debounce - Lodash Library Function

const myDebounce = (cb, delay) => {
    let timer

    return function(...args) {
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            cb(...args)
        }, delay)
    }
}

// Polyfill for throttle - Lodash Library Function

const myThrottle = (cb, delay) => {
    let last = 0
    return (...args) => {
        let now = new Date().getTime()
        if(now-last < d) return;
        last = now
        return cb(...args);
    }
}

// Polyfill for memoize

function myMemoize(fn, context) {
    let result = {}
    return function(...args) {
        let cacheArgs = JSON.stringify(args)
        if(!result[cacheArgs]) {
            result[cacheArgs] = fn.call(context||this, ...args);
        }
        return result[cacheArgs]
    }
}
