import { useState, useEffect } from "react";
import DeleteTaskButton from "./DeleteTaskButton";
import UpdateTaskForm from "./UpdateTaskForm";

function Task({ routineTask, handleDeleteRoutineTask }) {
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
        <div id="task">
            <h4>{task.name}</h4>
            <UpdateTaskForm 
                taskId={task.id} 
                handleUpdateTask={handleUpdateTask} 
            />
            <DeleteTaskButton 
                routineTask={routineTask} 
                handleDeleteRoutineTask={handleDeleteRoutineTask} 
            /> 
        </div>
    )
}

export default Task;