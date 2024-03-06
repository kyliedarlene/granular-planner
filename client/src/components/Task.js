import { useState, useEffect } from "react";
import DeleteTaskButton from "./DeleteTaskButton";

function Task({ routineTask, handleDeleteRoutineTask }) {
    const [task, setTask] = useState([])
    
    // function updateTask(id, newTaskName) {
    //     fetch(`/tasks/${id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             name: newTaskName
    //         })
    //     })
    // }

    useEffect(() => {
        fetch(`/tasks/${routineTask.task_id}`)
            .then(response => response.json())
            .then(data => setTask(data))
    }, [])

    return (
        <div id="task">
            <h4>{task.name}</h4>
            {/* <h4 onClick={() => updateTask(task.id, "update task test")}>
                {task.name}
            </h4> */}
            <DeleteTaskButton routineTask={routineTask} handleDeleteRoutineTask={handleDeleteRoutineTask} /> 
            {/* <h4>{task.name}</h4> */}
        </div>
    )
}

export default Task;