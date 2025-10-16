//Compile Time Error
console.log(1);
//Runtime Error
console.log(x);
//Error-Handeling
try{
    console.log("Try Block Starts Here");
    console.log(y);
    console.log("Try Block Ends Here");
}
catch(e){
    console.log("I am Inside Catch Block");
    console.log("Your error is here: ",e);
}
finally{
    console.log("I will Run EveryTime");
}
//Custom Error
try{
    console.log(z);
}
catch(err){
    throw new Error("Declare First then Print");
}
let errorCode=100;
if(errorCode=100){
    throw new Error("Invalid Json");
}
