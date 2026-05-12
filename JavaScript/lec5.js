
let inp=document.querySelector("input")
let h2=document.querySelector("h2")
let btn=document.querySelector("button")
btn.addEventListener("click",function(){
    let data=inp.value
    h2.textContent=data
    inp.value=""
})

// let h1=document.getElementsByClassName("tow");
//  console.log(h1[0].innerText);
//  let h3=document.querySelector("h3");
//  let name=prompt("Enter your name")
//  h3.innerText="Name"+" "+name
 
