//Dynamic Nature Of Object
let obj={
    age: 12,
    wt: 68,
    ht: 180,
};
console.log(obj);
obj.color="White";
console.log(obj);
//Object Cloning
//Spread Operator
let dest={...obj};
obj.age=90;
console.log("src: ", obj);
console.log("dest: ", dest);
//Assign Operator
let obj1={
    value:101,
    name:'Harsh Vardhan',
};
dest=Object.assign({},obj,obj1);
console.log("dest: ", dest);
//iteration method
let obj2={
    age: 22,
    wt: 87,
    ht: 190,
};
let des={};
for(let key in obj2){
    let newKey=key;
    let newValue=obj2[key];
    des[newKey]=newValue;
}
console.log("des: ", des);
