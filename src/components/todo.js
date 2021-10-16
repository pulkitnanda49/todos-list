import React from 'react'

const Todo = ({ todo, onDelete }) => {
    return (
        <div>
            <h4>{todo.title}</h4>
            <h6>{todo.desc}</h6>
            <button className="btn btn-sm btn-danger" onClick={() => { onDelete(todo) }}>
                Delete
            </button>
        </div>
    )
}

export default Todo
