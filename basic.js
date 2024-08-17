let arr = [1,2,3,4,5];
let arr1 = [10,20,30,40,50];

let arr3 = [...arr,...arr1];
console.log(arr3)

let arr4 = new Array(15,30,45);
console.log(arr4);

arr4.push(20);
console.log(arr4);


console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// == -> CHECK ONLY FOR VALUE
// === -> CHECK FOR THE VALUE AS WELL AS THE DATATYPE...SHOULD BE USED

console.log("2" === 2);

console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.round(4.5));
console.log(Math);

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);
console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Love",
    "full name": "Love Kumar Agrawal",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "love@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "love@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "love@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(Object.entries(tinderUser));


const f = (num1, num2) => (num1 + num2)
f(1,2);
console.log(f(1,2));


(function add(num1,num2){
    console.log(num1+num2);
})(1,2);


(function add1(num1,num2){
    console.log(num1+num2);
})(5,2)

const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
let val1; 
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);


const coding = ["js", "ruby", "java", "python", "cpp"]

function printMe(item){
    console.log(item);
}
    
coding.forEach(printMe)

coding.forEach( function (val){
    console.log(val);
} )

coding.forEach( (item) => {
    console.log(item);
} )

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageFileName);
} )

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(myObject[key]);
}

function a(i) {
    if(i == 0) {
        return 0;
    }
    return i + a(i-1);
}

console.log(a(3));
