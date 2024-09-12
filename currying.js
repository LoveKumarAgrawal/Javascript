// Currying refers to the process of transforming a function with multiple arity into the same function with less arity. The curried effect is achieved by binding some of the arguments to the first function invoke, so that those values are fixed for the next invocation.

// There are two ways for currying - bind() and closure

// Using bind()

let multiply = function (x, y) {
    console.log(x*y)
}

let multiplyByTwo = multiply.bind(this, 2)
multiplyByTwo(5)

let multiplyByThree = multiply.bind(this, 3)
multiplyByTwo(5)


// Using closure
let multiplySecond = function (x) {
    return function (y) {
        console.log(x*y)
    }
}
let multiplySecondByTwo = multiplySecond(2)
multiplySecondByTwo(5)




// Interview Question - Implement Infinite Currying for ex - sum(1)(2)(3)(4)(5)()
let sum = function(x) {
    return function(y) {
        if(y) return sum(x+y)
        return x
    }
}

console.log(sum(1)(2)(3)(4)(5)())