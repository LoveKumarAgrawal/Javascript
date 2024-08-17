function myFun(myName) {
    let isName = myName;
    return function displayName(){
        console.log(myName);
    }
}

let a = myFun("love");
a();



// Practical use case of closure...important for interview purpose


// <script>
// // document.getElementById("orange").onclick = function(){
// //     document.body.style.backgroundColor = `orange`
// // }
// // document.getElementById("green").onclick = function(){
// //     document.body.style.backgroundColor = `green`
// // }

// function clickHandler(color){
//     // document.body.style.backgroundColor = `${color}`

//     return function(){
//         document.body.style.backgroundColor = `${color}`
//     }
// }

// document.getElementById('orange').onclick = clickHandler("orange")
// document.getElementById('green').onclick = clickHandler("green")

// </script>