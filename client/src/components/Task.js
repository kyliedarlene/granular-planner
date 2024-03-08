import { useState, useEffect } from "react";
import DeleteTaskButton from "./DeleteTaskButton";
import UpdateTaskForm from "./UpdateTaskForm";
import {
    ItemMeta,
    ItemImage,
    ItemHeader,
    ItemGroup,
    ItemExtra,
    ItemDescription,
    ItemContent,
    Image,
    Item,
    Segment,
    Button,
    Container
  } from 'semantic-ui-react'

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
        <Segment>
            <p>{task.name}</p>
            {/* <UpdateTaskForm 
                taskId={task.id} 
                handleUpdateTask={handleUpdateTask} 
            /> */}
            <DeleteTaskButton
                routineTask={routineTask} 
                handleDeleteRoutineTask={handleDeleteRoutineTask} 
            /> 
        </Segment>
    )
}

export default Task;