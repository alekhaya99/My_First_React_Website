import React from 'react'
import {Todo} from "../component/todo"

export const Todos = (props) => {
    let todostyle={
        minHeight: "70vh",
        margin:'10px auto'
    }
    return (
        <div className="container" style={todostyle}>
            <h3 className="my-3">Todos Work</h3>
            {props.todos.length===0?"Sorry there is no list to display":props.todos.map((todos)=>{
                
                return <Todo todos={todos} onDelete={props.onDelete}/>
            })}
            
            
        </div>
    )
}
