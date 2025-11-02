// // let firstPromise= new Promise( (resolve,reject)=>{
// //     console.log("Harsh Vardhan");
// //     // reject(new Error("Internal Server Error"));
// //     resolve(1001);
// // }
// // );
// // function sayMyName(){
// //     console.log("My Name is Harsh Vardhan");
// // }
// // setTimeout(sayMyName,10000);
// // let secondPromise= new Promise( (resolve,reject)=>{
// //     // console.log("My Name is Harsh Vardhan");
// //     // // resolve(1000);
// //     // reject("You Cannot Print it");
// //     setTimeout(function sayMyName(){
// //         console.log("Harsh Vardhan");
// //     },5000);
// //     // resolve(122);
// //     // reject("Huh Kitni Baar Bolu ki Nahi Print kr Skte");
// //     // return 1;
// // });
// let promise1= new Promise((resolve,reject)=>{
//     let success=true;
//     if(success){
//         resolve("Promise Fulfilled");
//     }
//     else{
//         reject("Internal Server Error");
//     }
// });
// // promise1.then((message)=>{
// //     console.log("Then ka message "+message);
// // }).catch((error)=>{
// //     console.log("Error: " +error);
// // })
// promise1.then((message)=>{
//     console.log("First Message: "+message);
//     return "Promise Fulfilled Second Message";
// }).then((message)=>{
//     console.log("Second Message: "+message);
//     return "Promise Fulfilled Third Message";
// }).then((message)=>{
//     console.log("Third Message: "+message);
// }).catch((error)=>{
//     console.error("Error: "+error);
// }).finally((message)=>{
//     console.log("I am Inevitable "+message);
// })
let promise1= new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"First");
})
let promise2= new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"Second");
})
let promise3= new Promise((resolve,reject)=>{
    setTimeout(resolve,3000,"Third");
})
Promise.all([promise1,promise2,promise3]).then((values)=>{
    console.log(values);
}).catch((error)=>{
    console.log("Error: "+error);
})
