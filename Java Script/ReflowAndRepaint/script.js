// //Code 1
// const t1=performance.now();
// for(let i=1;i<=100;i++){
//     let para=document.createElement('p');
//     para.textContent="This is Para " +i;
//     document.body.appendChild(para);
// }
// const t2=performance.now();
// console.log("Total time by Code 1: ",(t2-t1));
// //Code 2
// const t3=performance.now();
// let mydiv=document.createElement('div');
// for(let i=1;i<=100;i++){
//     let para=document.createElement('p');
//     para.textContent="This is Para "+i;
//     mydiv.appendChild(para);
// }
// document.body.appendChild(mydiv);
// const t4=performance.now();
// console.log("Total Time Taken By Code 2: ",(t4-t3));
const t5=performance.now();
let fragment=document.createDocumentFragment();
for(let  i=1;i<=100;i++){
    let para=document.createElement('p');
    para.textContent="This is Para "+i;
    fragment.appendChild(para);
}
document.body.appendChild(fragment);
const t6=performance.now();
console.log("Total Time Taken By COde 3 is: ",(t6-t5));
