import React, { useState } from "react";

function UpdateTaskForm({ taskId, handleUpdateTask }) {
    const [formData, setFormData] = useState([])

    function handleSubmit(event) {
        event.preventDefault()
        handleUpdateTask(taskId, formData[0])
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder = "Rename task"
                value = {formData}
                onChange = {(event) => setFormData([event.target.value])}
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default UpdateTaskForm;