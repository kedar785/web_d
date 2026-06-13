
import React from 'react'
import Task from './task'

const App = () => {
  return (
    <div>
      <h2>haii</h2>
      <Task></Task>
    </div>
  )
}

export default App


//----------------------------------------------
// import React, { useMemo } from 'react'
// import useCounter from "./useCounter"
// const App = () => {
//       let {count,inc,dec,reset}=    useCounter(0)

//     let total=  useMemo(()=>{
//         let res=0
//         for(let i=0;i<1000000000;i++){
//           res+=i
//         }
//         return res


//       },[])

  
//   return (
//     <div>
//       <h4>{count}</h4>
//       <h3>{total}</h3>
//        <button onClick={inc}>++</button>
//        <button onClick={dec}>--</button>
//        <button onClick={reset}>reset</button>
//     </div>
//   )
// }

// export default App

//----------------------------------------
// import React from 'react'
// import TodoList from "./TodoList"
// const App = () => {
//   return (
//     <div>
    
//       <TodoList/>
//     </div>
//   )
// }

// export default App

//----------------------------------------------------
// // import { useEffect } from "react"
// // import { useState } from "react"



// import React from 'react'
// import NavBar from "./NavBar"
// import { Route, Routes } from "react-router-dom"
// import Home from "./Home"
// import About from "./About"
// import Task from "./Task"

// const App = () => {
//   return (
//     <div>
//       <NavBar/>
//       <Routes>
//         <Route    path="/"   element={<Home/>}/>
//         <Route    path="/about"   element={<About/>}/>
//         <Route    path="/task"   element={<Task/>}/>
//       </Routes>
//     </div>
//   )
// }

// export default App

//--------------------------------------------
// import React from 'react'
// import Task from './Task'
// const App = () => {
//   return (
//     <div>
//       <Task/>
//     </div>
//   )
// }

// export default App


//--------------------------------------------------

// import React, { useEffect, useState } from 'react'
//  import './App.css'
// const App = () => {
  
//   let[ApiData,SetApiData]=useState([])
//   useEffect(()=>{
//     //console.log("hello");
//     async function call(){
//       let res=await fetch("https://dummyjson.com/products")
//       let data=      await res.json()
//      console.log(data.products);
//      SetApiData(data.products)
      
//     }
//     call()
//   },[])
//   return (
//     <div id="parent_div" className=''>

//       {
//         ApiData.map((a)=>{
//           return(
//             <div id="cart">
//               <h1>{a.id}</h1>
//                <img  src={a.thumbnail}/>
//               </div>
//           )
//         })
//       }
     
//     </div>
//   )
// }

// export default App
//------------------------------

// import React from 'react'
// import Form from './Form'
// const App = () => {
//   return (
//     <div >
//      <Form/>
//     </div>
//   )
// }

// export default App

//---------------------------------------
// import React, { useState } from 'react'

// const App = () => {
//   let [input,SetInput]=useState("")
//   let [data,SetData]=useState('')
//   function fun1(e){
//     SetInput(e.target.value);
//     console.log(input);
    
//   }
//   function done(){
//     SetData(input)
//   }
//   return (
//     <div>
//       <h2>{data}</h2>
//       <input type='text' name='input'  placeholder='Enter your name'  onChange={fun1}/>
//       <button onClick={done}>click</button>
//     </div>
//   )
// }

// export default App

//------------------------------------------------
// import React,{useState} from 'react'

// const App = () => {
//   let [color,SetColor]=   useState("red")
//   function fun1(){
//     SetColor("green")
//   }
//   return (
//     <div style={{backgroundColor:color,width:"100vw",height:"100vw"}}>
//       <button onClick={fun1}>green</button>
//     </div>
//   )
// }

// export default App
//---------------------------------------
// import React from 'react'
// import Home from './Home'

// const App = () => {
//   let user="sachin"
//   return (
//     <div>
//       <Home data={user}/>
//     </div>
//   )
// }

// export default App
//----------------------------------------

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App
