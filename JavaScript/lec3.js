// HOISTING:-
// var a 
// console.log(a);
// a=5

// console.log(b)
// let b=9

// Sum()
// var sum=()=>{
//     console.log("hello");
// }
// sum()

// let sume=()=>{
//     console.log("hello");
// }
// sume()

// let arr=[1,2,3,4,5]
// console.log(arr.length)
// arr.push(6)
// console.log(arr)
// arr.pop()
// console.log(arr,"pop");
// // arr.pushift(0)
// // console.log(arr,"unshifttt");
// arr.shift()
// console.log(arr)
// console.log(arr.includes(11),"kaaa");
// console.log(arr.indexOf(4))
// "achhe din ?"
// let data =arr.find(function(a){
//     return a=5
    
// })

// arr.forEach((a,b,c)=>{
//     console.log(c,'forEach')
//     console.log(b)
//     console.log(a)
// })

// console.log(data,"haiiiii");

// let arr1=arr.map((a,b,c)=>{
//     console.log(c);
// return a*2
// })
// console.log(arr1);

// let filterV=arr.filter((a,b,c)=>{
//     return a>2
// })
// console.log(filterV)

// let sum=arr.reduce((a,b,c,d)=>{
//     console.log(a,"mai a hu");
//     console.log(b,"mai b hu");
//     return a+b
// },10)
// console.log(sum,"kya ayega")

arr=[1,2,3,4,5,65,7,9,45]
let filter1=arr.filter((a,b,c,d)=>{
    return a>2
})
console.log(filter1)
let filter2=filter1.filter((a,b,c,d)=>{
    return  (a%2)==0
})
console.log(filter2)
let sum=filter2.reduce((a,b,c,d)=>{
   
    return a+b
})
console.log(sum)