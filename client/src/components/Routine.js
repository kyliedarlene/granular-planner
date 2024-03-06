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
        fetch (`/routine_tasks/${routineTask.id}`, {
            method: "DELETE",
        })
        // const index = routineTasks.indexOf(routineTask)
        console.log(routineTasks)
        // const newRoutineTasks = [...routineTasks]
        // console.log(newRoutineTasks)
        // newRoutineTasks.splice(0)
        // console.log(newRoutineTasks)
        // setRoutineTasks(newRoutineTasks)
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