// const arr = [1, 2, 3, 4, 5]

// let sumOfArr = arr.reduce((a,b) => a+b,1)
// console.log(sumOfArr);

// let factorial = (n) => n===0?1:n*factorial(n-1);

// console.log(factorial(5));

// console.log(2**5);

// const arr = [12, 25, 65, 89, 56, 35, 74, 23, 10]

// console.log(arr.sort((a,b) => b-a));

// let divisibleBy5 = arr.filter((element) => element%5===0)
// console.log(divisibleBy5);

// function addingOne(num){
//     return num+1;
// }
// const addingOne = (num) => num + 1;

// const add = arr.map((element) => addingOne(element))
// console.log(add);

// const products = [
//     {name:"sports car"},
//     {name:"laptop"},
//     {name:"phone"}
// ];
// const productsWithPrice = products.map((product)=>{
//     return {...product, price:100};
// })
// console.log(productsWithPrice);


// const arr = [1, 2, 3, 4]
// const usingmap = arr.map((element) => [element*2])
// const usingFlatMap = arr.flatMap((element) => [element*2])
// const usingFlatMap1 = arr.flatMap((element) => [[element*2]])
// console.log(usingmap);
// console.log(usingFlatMap);
// console.log(usingFlatMap1);

// const arr = [1, [[[10, 20, 30, 40]]], 5, [100, 200, 300, 400], 6]
// console.log(arr.flat(Infinity));



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
        accumulator = accumulator?cb(accumulator, this[i], i, this):this[i]
    }
    return accumulator
}

// Question 1 : map() vs forEach()