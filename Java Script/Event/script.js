// function changetext(){
//     let fpara=document.getElementById('fpara');
//     if(fpara.textContent=="Hello jee"){
//         fpara.textContent="Hello Harsh";
//     } 
//     else{
//         fpara.textContent="Hello jee";
//     }
// }
// let fpara=document.getElementById('fpara');
// fpara.addEventListener('click',changetext());
// fpara.removeEventListener('click',changetext());
// function changetext(event){
//     console.log(event);
//     let fpara=document.getElementById('fpara');
//     if(fpara.textContent=='Hello jee') fpara.textContent="Hello Harsh";
//     else fpara.textContent="Hello jee";
// }
// let fpara=document.getElementById('fpara');
//  fpara.addEventListener('click',changetext());
// let anchorElement=document.getElementById('fanchor');
// function Click(event){
//     event.preventDefault();
//     if(anchorElement.textContent=='Click Here') anchorElement.textContent="Click Done Bhai";
//     else anchorElement.textContent="Click Here";
// }
// anchorElement.addEventListener('click',Click);
//  let paras=document.querySelectorAll('p');
//  function alertPara(event){
//     alert("You have Clicked on Para: " +event.target.index);
//  }
//  for(let i=0;i<paras.length;i++){
//     let para=paras[i];
//     para.index=i+1; 
//     para.addEventListener('click', alertPara);
//  }
 let  mydiv=document.getElementById('wrapper');
 function alertdiv(event){
    if(event.target.nodeName==='span') alert("You have Clicked on Span: " +event.target.textContent);
    else alert("You have Clicked on Para: " +event.target.textContent);
 }
 document.addEventListener('click',alertdiv);
