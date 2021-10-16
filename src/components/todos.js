import React from 'react'
import Todo from './todo'

const todos = (props) => {
    return (
        <div className="container">
            <h3 className="text-center my-3">Todos List</h3>
            {props.todos.length === 0 ? "No Todos to Show" :

                props.todos.map((e) => { return <Todo todo={e} key={e.sno} onDelete={props.onDelete} /> })

            }

        </div>
    )
}

export default todos
