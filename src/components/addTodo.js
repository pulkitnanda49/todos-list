import React from 'react'

const addTodo = () => {
    return (
        <div className="container my-3">
            <h3 className="text-center py-3">Add a Todo</h3>
            <form>
                <div className="mb-3">
                    <label for="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label for="desc" className="form-label">Description</label>
                    <input type="title" className="form-control" id="desc" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-sm btn-success">Submit</button>
            </form>
        </div>
    )
}

export default addTodo
