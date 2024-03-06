import { useState, useEffect } from "react";
import TaskList from "./TaskList";
import DeleteDayRoutineButton from "./DeleteDayRoutineButton";

function Routine({ dayId, routineId, dayRoutine }) {
    const [routine, setRoutine] = useState([])

    useEffect(() => {
        fetch(`/routines/${routineId}`)
            .then(response => response.json())
            .then(data => setRoutine(data))
    }, []);
    
    return (
        <div>
            <h2>{routine.name}</h2>
            <DeleteDayRoutineButton dayRoutine = {dayRoutine}/>
            <TaskList routine={routine} id={routineId}/>
        </div>
    )
}

export default Routine;