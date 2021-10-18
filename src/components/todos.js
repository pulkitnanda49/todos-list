import React from 'react'
import Todo from './todo'

const todos = (props) => {
    let myStyle = {
        minHeight: "100vh",
        margin: "10px 0"
    }
    return (

        <div className="container" style={myStyle}>
            <h3 className="text-center my-3">Todos List</h3>
            {props.todos.length === 0 ? "No Todos to Show" :

                props.todos.map((e) => {
                    return
                    <>
                        {
                            <Todo todo={e} key={e.sno} onDelete={props.onDelete} />
                        }
                    </>
                })

            }

        </div>
    )
}

export default todos
