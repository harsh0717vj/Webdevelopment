//Global Scope
var age=25;
console.log(age);
{
console.log(age);
}
if(true) console.log(age);
for(let i=1;i<=3;i++) console.log(age);
function sayHello(){
    console.log("hi ",age);
}
sayHello();
//Function scope
function say(){
    var fullName='Harsh Vardhan';
    console.log("Hello ",fullName);
}
say();
//Block Scope
{
    var height=12;
    let err=43;
    console.log(err);
    let ree=54;
    console.log(ree);
}
console.log(height);
// console.log(err);
// console.log(ree);
//Temporal Deadzone
// console.log(marks);//TDE
let marks=100;
console.log(marks);
