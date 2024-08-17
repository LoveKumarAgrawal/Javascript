new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("This is promise one");
        resolve();
    },1000);
})
.then(function(){
    console.log("Promise one is resolved");
})

const promiseTwo = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username:"Love",password:"123456"});
    }, 1000);
})

promiseTwo.then(function(user){
    console.log(user);
})

const promiseThree = new Promise((resolve,reject) => {
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username:"Agrawal",password:"123"});
        }else{
            reject("Error in promise three");
        }
    })
})

promiseThree.then((user)=>{
    console.log(user);
    return user.username;
}).then((user) => {
    console.log(user);
}).catch((error) => {
    console.log(error);
}).finally(()=>{
    console.log("This will run everytime");
})

const promiseFour = new Promise((resolve,reject) => {
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({username:"Agrawal",password:"123"});
        }else{
            reject("Error in promise three");
        }
    })
})

async function consumingPromiseFour(){
    try{
        const response = await promiseFour;
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
consumingPromiseFour();


fetch('https://api.github.com/users/lovekumaragrawal').then((response) => {
    return response.json();
}).then((data)=>{
    console.log(data);
}).catch((error) => console.log(error))


async function getUserData() {
    try {
        const response = await fetch('https://api.github.com/users/lovekumaragrawal');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
getUserData();

