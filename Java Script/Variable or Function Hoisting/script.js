//Function Hoisting
function sayMyName(finalName){
    console.log(finalName);
}
sayMyName('Harsh Vardhan');
//Variable Hoisting
console.log(age);
var age=25;
// sayHello();
// let sayHello=function(){
//     console.log('Hello Jee, Kaise ho saare');//Will not work and will give error
// }
//Class Hoisting is also not possible
// const object1=new Human();
// class Human{

// }
function greetMe(greet,fullName){
    console.log('Hello ',fullName);
    greet; 
}
function greet(){
    console.log("Greetings for the Day");
}
greetMe(greet,'Harsh Vardhan');
function solve(number){
    return function(number){
        return number*number;
    }
}
let ans=solve(5);
let finalans=ans(10);
console.log(finalans);
//Array of Functions
const arr=[
    function(a,b){
        return a+b;
    },
    function(a,b){
        return a-b;
    },
    function(a,b){
        return a*b;
    },
    function(a,b){
        return a/b;
    }
]
let first=arr[0];
let second=arr[1];
let third=arr[2];
let fourth=arr[3];
let ans1=first(1,2);
console.log(ans1);
let ans2=second(5,4);
console.log(ans2);
let ans3=third(2,3);
console.log(ans3);
let ans4=fourth(6,2);
console.log(ans4);
let object1={
    age:19,
    wt:72,
    greet:()=>{
        console.log("Hello Saare");
    }
}
console.log(object1.age);
console.log(object1.wt);
object1.greet();
