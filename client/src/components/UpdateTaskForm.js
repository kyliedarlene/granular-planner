import React, { useState } from "react";
import { Input, Button } from 'semantic-ui-react'

function UpdateTaskForm({ taskId, handleUpdateTask }) {
    const [formData, setFormData] = useState([])

    function handleSubmit(event) {
        event.preventDefault()
        handleUpdateTask(taskId, formData[0])
        setFormData([])
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <Input
                type="text"
                placeholder = "New Task Name"
                value = {formData}
                onChange = {(event) => setFormData([event.target.value])}
                action={{ color: 'blue', content: 'Rename Task' }}
                size='small'
            />
            {/* <Button type="submit">Submit</Button> */}
        </form>
    )
}

export default UpdateTaskForm;