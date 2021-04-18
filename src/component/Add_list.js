import React, { useState } from 'react';

export const Add_list = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const submit = (e) => {
        e.preventDefault();
        // e.preventDefault();To prevent the page reloading
        if (!title || !description) {
            alert("Title or Description cannot be left blank");
        }
        else {
            addTodo(title, description);
            setTitle("");
            setDescription("");
        }
    }
    return (
        <div className="container my-3">
            <h3>Add the TO-DO List</h3>

            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Enter the title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Enter the description</label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" id="description" />
                </div>

                <button type="submit" className="btn btn-sm btn-danger">Add Event</button>
            </form>
        </div>
    )
}
