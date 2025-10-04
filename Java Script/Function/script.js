function SayMyName(){
    console.log("Harsh Vardhan");
}
for(let i=1;i<=4;i++){
    SayMyName();
}
function printCounting(){
    for(let i=1;i<=100;i++){
        console.log(i);
    }
}
printCounting();
//Parameterised Function
function printnumber(num){
    console.log("Printing Number: ",num);
}
printnumber(5);
function Average(num1,num2){
    let average=(num1+num2)/2;
    return average;
}
console.log("Average of two Numbers: ",Average(7,9));

function getMyName(firstname,secondname){
    let fullName=firstname + " " +secondname;
    return fullName;
}
console.log("Full Name: ",getMyName('Harsh','Vardhan'));
//Storing Function in a Variable
let Multiplication=function(a,b){
    return a*b;
}
let ans=Multiplication(3,9);
console.log(ans);
//Arrow Function
function  Exponent(x,y){
    let a=x**y;
    return a;
}
console.log(Exponent(2,3));
let Exponent1=(x,y)=>{
    let a=x**y;
    return a;
}
console.log(Exponent1(2,3));
