class User{
    constructor(username){
        this.username = username;
    }
    logIn(){
        console.log(`Hello ${this.username}`);
    }

}
class Developer extends User{
    constructor(username, password, email){
        super(username);
        this.password = password;
        this.email = email;
    }
    role(){
        console.log(`Hello ${this.username}`);
    }
}

const descripter = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(descripter);

const myObj = {
    name: "love",
    pass: 123
}
