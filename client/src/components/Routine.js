import { useState, useEffect } from "react";
import TaskList from "./TaskList";

function Routine({ dayId, routineId, dayRoutine }) {
    const [routine, setRoutine] = useState([])
    const [routineTasks, setRoutineTasks] = useState([])

    useEffect(() => {
        fetch(`/routines/${routineId}`)
            .then(response => response.json())
            .then(data => {
                setRoutine(data)
                setRoutineTasks(data.routine_tasks)
            })
    }, []);

    function handleDeleteRoutineTask(routineTask) {
        // delete RoutineTask object in database
        fetch (`/routine_tasks/${routineTask.id}`, {
            method: "DELETE",
        })
        
        // update routineTasks to reload DOM
        const index = routineTasks.indexOf(routineTask)
        const newRoutineTasks = [...routineTasks]
        newRoutineTasks.splice(index, 1)
        setRoutineTasks(newRoutineTasks)
    }
    
    return (
        <div>
            <h2>{routine.name}</h2>
            {/* <DeleteDayRoutineButton dayRoutine = {dayRoutine}/> */}
            <TaskList 
                routineId={routineId} 
                routineTasks={routineTasks} 
                handleDeleteRoutineTask={handleDeleteRoutineTask} 
            />
        </div>
    )
}

export default Routine;