//promise is a class in js
//constructor(function)

// let promise= new Promise((fulfilled,notFulfilled) => {
//     let num1=10;
//     let num2=15;
//     let sum = num1 + num2;
//     if (sum > 25 ) {
//         fulfilled();
//     } else {
//         notFulfilled();
//     }
// });
// //.then= promise fulfilled
// //.catch=promise not fulfilled

// myPromise
//     .then(() => {
//         console.log("Promise was fulfilled");
//     })
//     .catch(() => {
//         console.log("Promise was not fulfilled");
//     });

// function addTwoNumbers(num1,num2) {
//     //2,3
//     let sum=0;
//     setTimeout(() => {
//         console.log(num1 + num2);
//         sum= num1 + num2;
//     },5000);
//     console.log("inside addTwoNumbers");
//     return sum;

// }
// console.log(addTwoNumbers(2,3));