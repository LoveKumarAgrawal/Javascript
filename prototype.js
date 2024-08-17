const user = {
    username:"Love",
    password:123,
    isLogged: true,

    greeting: function(){
        console.log("Got the data of the user");
    }
}
console.log(user);
console.log(user.username);
user.greeting();

function User(username, password, isLogged){
    this.username = username;
    this.password = password;
    this.isLogged = isLogged;

    this.greeting = function(){
        console.log(`Welcome ${username}`);
    }
    // return this;
}


const user1 = new User("love",123,true);
const user2 = new User("ggg",256,false);
console.log(user);
console.log(user.constructor);

let arr = [1, 2, 3, 4]
let arr1 = [1, 2, 3, 4,5,66]

Object.prototype.love = function(){
    return this.length;
}

console.log(arr1.love());



// -------------- Call -----------------
function SetUsername(username){
    this.username = username;
}
function SetUserData(username, password, isLogged){
    SetUsername.call(this, username);
    this.password = password;
    this.isLogged = isLogged;
}

const user3 = new SetUserData("Love", 123, true);
console.log(user);