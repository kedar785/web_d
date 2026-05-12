let inp=document.querySelector('input')
let buttons=document.querySelectorAll('button')
for(let btn of buttons){
    btn.addEventListener("click",()=>{
        let btnText=btn.innerText
        console.log(btnText);
        if(btnText==="C"){
            inp.value="";
         
        }else if(btnText==='='){
            inp.value=eval(inp.value)
        }else{
            inp.value+=btnText
        }
        
    })
}

   