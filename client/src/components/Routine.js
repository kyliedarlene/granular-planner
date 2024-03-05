import { useState, useEffect } from "react";
import TaskList from "./TaskList";

function Routine({ id }) {
    const [routine, setRoutine] = useState([])

    useEffect(() => {
        fetch(`/routines/${id}`)
            .then(response => response.json())
            .then(data => setRoutine(data))
    }, []);

    const tasks = routine.routine_tasks
    console.log(tasks)
    
    return (
        <>
            <h2>Routine Rendered!</h2>
            <TaskList tasks={tasks}/>
        </>
    )
}

export default Routine;