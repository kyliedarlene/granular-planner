import React, { useState } from "react";

function AddTask({routine}) {

    const [formData, setFormData] = useState([]);
    function postTask() {
        fetch(`/tasks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: formData[0]
            })
        })

        fetch(`/routine_tasks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                routine_id: routine.id
            })
        })
    } 

    function handleSubmit(e) {
        e.preventDefault();
        console.log(routine.id)
        postTask();
    }

    function handleChange(e) {
        setFormData([
          e.target.value
        ]);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder = "name new task"
            value = {formData}
            onChange = {handleChange}/>
            <button type="submit">Submit</button>
        </form>
    )
    //form takes in a name and make a new routine
    //return takes us to /update-routine/:id
}


export default AddTask;