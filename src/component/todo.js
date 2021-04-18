import React from 'react'

export const Todo = ({todos,onDelete}) => {
    return (
        <div>
            <h4>{todos.title}</h4>
            <p>{todos.description}</p>
            <button className="btn btn-sm btn-danger" key={todos.serial_no} onClick={()=>onDelete(todos)}>Delete</button>
        </div>
    )
}
