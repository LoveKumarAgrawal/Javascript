// Using the call() method, we can write a method that can be used on different objects
// This method is also known as function borrowing

let myName = {
    firstName: "Love",
    lastName: "Agrawal",
}

let printFullName = function (hometown, state) {
    console.log(`${this.firstName} ${this.lastName} ${hometown} ${state}`)
}

printFullName.call(myName, "Mathura", "Uttar Pradesh")

// call() method - call(this, arguments separated by comma)
let myName2 = {
    firstName: "Elon",
    lastName: "Musk"
}

printFullName.call(myName2, "Gaya", "Bihar")

// apply() method - apply(this, []arguments array)
// The only difference between apply() and call() method is how we pass the arguments.

printFullName.apply(myName, ["Mathura", "Uttar Pradesh"])

// bind() method - bind(this, []argument array)
// The bind() looks like the call() method but instead of calling the method directly it binds the method with the object(this) and returns the copy of that method.

let printMyName = printFullName.bind(myName, "Mathura", "Uttar Pradesh")
printMyName()




// PolyFill for bind() method


Function.prototype.myBind = function(...args) {
    let obj = this
    let param = args.slice(1)
    return function(...args2) {
        obj.call(args[0], ...param, ...args2)
    }
}



let printMyName2 = printFullName.myBind(myName, "Mathura")
printMyName2("Uttar Pradesh")