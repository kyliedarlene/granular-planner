import React, { useState } from "react";
import { Input, Segment } from 'semantic-ui-react'

function AddTask({ routineId, handleAddRoutineTask }) {
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
            .then((response => response.json()))
            .then((newTask) => handleAddRoutineTask(routineId, newTask.id))
    } 

    function handleSubmit(e) {
        e.preventDefault();
        console.log(routineId)
        postTask();
        setFormData([])
    }

    function handleChange(e) {
        setFormData([
          e.target.value
        ]);
    }

    return (
        <Segment compact tertiary>
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder = "New Task"
                    value = {formData}
                    onChange = {handleChange}
                    action={{ color: 'green', content: 'Add New Task' }}
                />
                {/* <button type="submit">Submit</button> */}
            </form>
        </Segment>
    )
    //form takes in a name and make a new routine
    //return takes us to /update-routine/:id
}

export default AddTask;