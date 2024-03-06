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
            <h2>{routine.name}</h2>
            <TaskList routine={routine} id={id}/>
        </div>
    )
}

export default Routine;