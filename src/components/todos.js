import React from 'react'
import Todo from './Todo'

const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto "
    }
    return (

        <div className="container my-3" style={myStyle}>
            <h3 className="text-center my-3">Todos List</h3>
            {props.todos.length === 0 ? "No Todos to Show" :

                props.todos.map((e) => {
                    return (<Todo todo={e} key={e.sno} onDelete={() => props.onDelete(e)} />

                    )

                })

            }

        </div>
    )
}

export default Todos
