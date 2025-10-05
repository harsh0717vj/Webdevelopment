//Objects
let obj={
    name1:"Harsh",
    age:19,
    height:"5ft 11inch",
    greet: function(){
        console.log("Hello all");
    }
};
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
