/* We can use 'var', 'let', 'const' to declare a variable but in modern days the programmers don't use 'var' instead they only use 'let' and 'const'.

Rules for creating javascript variables :-
1. Cannot start with a number.
2. Can start with letter, _, $ but try to avoid using '_' and '$' because they are used a private variable in object oriented javascript.
3. Variables are Case Sensitive in Javascript.
4. Cannot have a space between variable name.
*/

// 'let' is same as the 'var' but 'const' is used when we don't want to change or overwrite the value of your variable.
let name_ = 'love';
var name1 = 'love1';
const name2 = 'love2';
console.log(name_,name1,name2);
// name2 = 'love3'; this will give an error

// 'let' have a block level scope(like if block, for block) and 'var' have a global level scope
var city = 'mathura';
{
    let city = 'agra';
    city = 'vrindavan';
    console.log(city);
}
console.log(city);

// In a array you add element in a constant variable
const arr1 = [20,30,40,50,60]
// arr1 = [20,30,40,60,80] you cannot do this in a constant variable array
arr1.push(70);// push is an array function
console.log(arr1);

/*
Most Common Programming Case Types :-
1) camelCase - first letter is small and middle is capital
2) kebab-Case - it have a '-' in between the word
3) snake_case - it have a '_' in between the word
4) PascalCase - both the middle and first letter is capital

Try to use camelCase more.
*/