import { useState, useEffect } from "react";
import DeleteTaskButton from "./DeleteTaskButton";
import UpdateTaskForm from "./UpdateTaskForm";
import { Segment, Divider } from 'semantic-ui-react'

function Task({ routineTask, handleDeleteRoutineTask, display }) {
    const [task, setTask] = useState([])
    
    function handleUpdateTask(id, newTaskName) {
        fetch(`/tasks/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: newTaskName
            })
        })
            .then((response => response.json()))
            .then((updatedTask) => setTask(updatedTask))
    }

    useEffect(() => {
        fetch(`/tasks/${routineTask.task_id}`)
            .then(response => response.json())
            .then(data => setTask(data))
    }, [])

    return (
        <Segment secondary clearing textAlign='center'>
            <p>{task.name}</p>
            {display === "view" ? 
                null :
                <>
                    <UpdateTaskForm 
                        taskId={task.id} 
                        handleUpdateTask={handleUpdateTask} 
                    />
                    <Divider horizontal>Or</Divider>
                    <DeleteTaskButton
                        routineTask={routineTask} 
                        handleDeleteRoutineTask={handleDeleteRoutineTask} 
                    /> 
                </>
            }
        </Segment>
    )
}

export default Task;