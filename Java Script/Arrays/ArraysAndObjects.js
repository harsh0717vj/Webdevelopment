//Objects
let obj={
    name1:"Harsh",
    age:19,
    height:"5ft 11inch",
    greet: function(){
        console.log("Hello all");
    }
};
for(let key in obj){
    console.log(key," ",obj[key]);
}
console.log(obj);
obj.greet();
console.log(typeof(obj));
let obj2=obj;
//Arrays
let arr=[1,2,3,4,5];
console.log(arr);
//Array Constructor
let brr=new Array(1,'Harsh',2,true);
console.log(brr);
console.log(typeof(arr));
console.log(typeof(brr));
console.log(arr[2]);
//Built-in Function
brr.push('Vardhan');
console.log(brr);
brr.pop();
console.log(brr);
brr.shift();
console.log(brr);
brr.unshift("Harsh Vardhan");
console.log(brr);
brr.unshift(1);
console.log(brr);
console.log(brr.slice(2,4));
console.log(brr);
brr.splice(1,0,'HUHUHU');
console.log(brr);
let ans=arr.map((number)=>{
    return number*number;
})
console.log(ans);
let neww=arr.map((number,index)=>{
    console.log(number+1);
    console.log(index);
})
let crr=[10,20,30,40,50,34245];
let evenarray=crr.filter((number)=>{
    if(number%2==0) return true;
    else return false;
})
console.log(evenarray);
let oddarray=crr.filter((number)=>{
    return number%2!=0;
})
console.log(oddarray);
let drr=[1,2,'Harsh','vardhan',null];
let str=drr.filter((value)=>{
    return typeof(value)=='string';
})
console.log(str);
//reduce
let err=[1,2,3,4,5];
 let bns=err.reduce((acc,curr)=>{
    return acc+curr;
 },0);
 console.log(bns);
 //sort
 let orr=[8,2,44,65,23];
 orr.sort();
 console.log(orr);
 console.log(orr.indexOf(65));
 let element=orr.find(num=>num>30)
 console.log(element);
 //length
 let length=orr.length;
 console.log(length);
 for(let i=0;i<length;i++){
    console.log(orr[i]);
 }
 orr.forEach((value,index) => {
    console.log("Number: ",value," Index: ",index);
 });
for(let key in orr){
    console.log(key," ",orr[key]);
}
for(let value of orr){
    console.log(value);
}
let ex='Harsh';
for(let alpha of ex){
    console.log(alpha);
}
//Passing Arrays in Functions
function getsum(orr){
    let len=orr.length;
    let sum=0;
    for(let i=0;i<len;i++){
        sum+=orr[i];
    }
    return sum;
}
let add=getsum(orr);
console.log(add);
//Method 2
function method2(arr){
    let sum=0;
    arr.forEach((ele)=>{
        sum+=ele;
    })
    return sum;
}
let addd=method2(arr);
console.log(addd);
