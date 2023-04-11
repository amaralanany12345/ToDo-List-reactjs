import React,{useState} from "react";
import './TodoList.css'
const TodoList=()=>{
    const [items,setItems]=useState([])
    let newTask;
    const addItems=()=>{
        setItems([...items,{
            id:items.length,
            task:'',
        }
    ]);
    };
    
    
    return(
        <div>
            <h1 className="Logo">TodoList</h1>
            <div className="header">

                <input className="taskInput" type='text' value={items.task} onInput={(e)=>{
                    newTask=e.target.value
                }} />
                <button className="addTask" onClick={()=>{addItems()
                setItems([...items,{
                    task:newTask
                }])
                
                }}>Add Task</button>
            </div>
            <ul>
                {items.map((item)=>{
                    
                    return(
                        <div className="todoList">
                            <p className="task">{item.task}</p>
                            <button className="remove" onClick={()=>{
                                items.splice(items.indexOf(item),1)
                                setItems([...items])
                            }}>X</button>
                        </div>
                        )
                })}
            </ul>
        </div>
    )
}

export default TodoList