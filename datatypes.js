/* There are two types of data types in javascript - 
   1) Primitive data types 
      For ex - string, numbers, boolean, null, undefined, symbols
      They get the memory in stack.
      2) Reference data types
      For ex - array, object literals, functions, dates
      They get the memory in heap.
*/

// Primitive Data Types :-

// String
let idName = "Love";
console.log("My name is " + idName);
console.log(idName);
// Number
let idNumber = 25;
console.log(idNumber);
// Boolean
let boo = true;
console.log(boo);
console.log(typeof boo);// you can use "typesof" to check the datatype of a variable
// null
let null_value = null;
console.log(typeof null_value);
console.log(null_value);
// undefined
let undef = undefined;
console.log(undef);

// Reference Data Types :-

// Array
let myarr = [30,20,2,60,"hello",false];
console.log(myarr);
console.log(typeof myarr);

// Object Literals
let marks = {
   love: 100,
   pooja: 99,
   manisha: 98
}
console.log(marks);
console.log(typeof marks);

// Function
function myname() {
   
}
console.log(typeof myname);

