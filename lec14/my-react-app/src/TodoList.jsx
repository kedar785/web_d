// import React, {useEffect, useState } from "react";
// import "./Todo.css";
// const TodoList = () => {
//   const [task, setTask] = useState("");
//   let [index,SetIndex]=useState(null)
//   const [todos, setTodos] = useState(()=>{
//     let data=  localStorage.getItem("key")
//     if(data){
//         return JSON.parse(data)
//     }
//     return []
//   });
//   useEffect(()=>{
//     localStorage.setItem("key",JSON.stringify(todos))

//   },[todos])



//   function edit(index){
//     setTask(todos[index])
//     SetIndex(index)

//   }


//   function handleAorUpdate(){
//     if(task.trim()==""){
//         return;
//     }
//     console.log("helloooooo");
    
//     if(index!==null){
//         let updateDATA=[...todos]
//         updateDATA[index]=task
//         setTodos(updateDATA)
//     }else{
//         setTodos([...todos,task])
//         setTask("")
//     }
    

//   }


//   function d(id){
//    let d= todos.filter((a,b)=>{
//         return id!=b

//     })
//     setTodos(d)

//   }








//   return (
//     <div className="container">
//       <h1>Todo List</h1>

//       <div className="input-box">
//         <input
//           type="text"
//           name="task"
//           value={task}
//           placeholder="Enter a task"
//           onChange={(e)=>setTask(e.target.value)}
  
//         />

// <button onClick={handleAorUpdate}>
//     {index!==null?"update":"Add"}
//     </button>
//       </div>
    

//       <div className="todo-list">
//         {todos.map((todo, index) => (
//           <div className="todo-item" key={index}>
//             <span>{todo}</span>

//             <div className="actions">
//               <button onClick={()=>edit(index)}>
//                 Edit
//               </button>

//               <button  onClick={()=>d(index)}>
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TodoList;
//----------------------------------------------------------


// import React, { useReducer } from "react";

// const TodoList = () => {
//   const [color, dispatch] = useReducer((state, action) => action, "white");

//   return (
//     <div style={{ backgroundColor: color, height: "100vh" }}>
//       <button onClick={() => dispatch("red")}>Red</button>
//       <button onClick={() => dispatch("gold")}>Gold</button>
//       <button onClick={() => dispatch("blue")}>Blue</button>
//       <button onClick={() => dispatch("green")}>Green</button>
//     </div>
//   );
// };

// export default TodoList;
//----------------------------------------------------------------

//  *****TODO LIST USE REDUSER***********
import React,{useReducer} from 'react'

const TodoList = () => {
    let  intialData={
        input:"",
        todos:[],
        index:null
    }
    function reduser(state,action){
        if(action.type=="SET_INP"){
            return{
                ...state,
                input:action.payload,
                
            }
        }
        else if(action.type=="ADD_TODO"){
            return{
                todos:[...state.todos,state.input]
            }
        }else if(action.type=="DELET_TODO"){
            return{
                ...state,
                todos:state.todos.filter((_,id)=>{
                    return id!==action.payload
                })
            }
        }else if(action.type=="UPDATE_TODO"){
            let updateTodos=[...state.todos]
            updateTodos[state.index]=state.input
            return{
                ...state,
                todos:updateTodos,
                input:"",
                index:null
            }
        }else if(action.type=="EDIT_TODO"){
            return{
                ...state,
                input:state.todos[action.payload],
                index:action.payload
            }
        }

    }
      let [state,disptach]=   useReducer(reduser,intialData)
      function handleSubmit(){
        if(state.index!==null){
            disptach({type:"UPDATE_TODO"})
        }else{
            disptach({type:"ADD_TODO"})
        }
      }
  return (
    <div>        
        <input  name='input'  value={state.input}  onChange={(e)=>disptach({type:"SET_INP",payload:e.target.value})}/>
        <button onClick={handleSubmit}>{state.index!==null?"update":"add"}</button>
        {  
            state.todos.map((a,b)=>{
                return(<>
                <h4>{a}</h4>
                <button onClick={()=>disptach({type:"DELET_TODO",payload:b})}>delet</button>
                <button onClick={()=>disptach({type:"EDIT_TODO",payload:b})}>edit</button>
                </>)
            })
        }
    </div>
  )
}

export default TodoList
