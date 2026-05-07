console.log("hello");
let btn=document.querySelector('button');
let body=document.querySelector('body');
let isDark=true
btn.addEventListener("click",function(){
    //console.log("hello");
    if(isDark){
    body.style.backgroundColor='blue'
 }
 else { body.style.backgroundColor='white'

 }
   isDark=!isDark
})