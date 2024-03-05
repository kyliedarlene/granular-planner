import { useState, useEffect } from "react";
import TaskList from "./TaskList";

function Routine({ id }) {
    const [routine, setRoutine] = useState([])

    useEffect(() => {
        fetch(`/routines/${id}`)
            .then(response => response.json())
            .then(data => setRoutine(data))
    }, []);
    
    return (
        <div>
            <h1>{routine.name}</h1>
            <TaskList routine={routine}/>
        </div>
    )
}

export default Routine;