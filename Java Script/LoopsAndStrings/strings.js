let name1="Harsh";
let name2='Vardhan';
console.log(name1);
let name3=`Harsh Vardhan
hello`
console.log(name3);
let name4=new String("Harsh Vardhan Jha");
console.log(name4);
//String concatenation
let op1='Harsh ';
let op2='Vardhan';
let newstr=op1+op2;
console.log(newstr);
console.log(op1+op2);
let final=` ${op1}${op2}`;
console.log(final);
//String length
console.log(op2.length);
//Uppercase AND Lowercase
console.log(op1.toUpperCase());
console.log(op2.toLowerCase());
//Substring
console.log(op2.substring(2));
console.log(op2.substring(2,5));
//Split Method
let words=newstr.split(' ');
console.log(words);
//Join Method
console.log(words.join('`'));
