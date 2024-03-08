import { useState, useEffect } from "react";
import TaskList from "./TaskList";
import DeleteRoutineButton from "./DeleteRoutineButton";

import {
    Container,
    CardMeta,
    CardHeader,
    CardDescription,
    CardContent,
    Card,
    Icon,
    Image,
    Segment
  } from 'semantic-ui-react'

function Routine({ routineId, display }) {
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

    function handleAddRoutineTask(routineId, taskId) {
        fetch(`/routine_tasks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                routine_id: routineId,
                task_id: taskId
            })
        })
            .then((response => response.json()))
            .then((newRoutineTask) => {
                const newRoutineTasks = [...routineTasks]
                newRoutineTasks.push(newRoutineTask)
                setRoutineTasks(newRoutineTasks)
            })
    }
    
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
            <Segment padded textAlign="center">
                <h2>{routine.name}</h2>
                
                {/* <DeleteDayRoutineButton dayRoutine = {dayRoutine}/> */}
                <TaskList
                    routineId={routineId} 
                    routineTasks={routineTasks} 
                    handleAddRoutineTask={handleAddRoutineTask}
                    handleDeleteRoutineTask={handleDeleteRoutineTask} 
                    display={display}
                />
                <DeleteRoutineButton routineId = {routineId}/>
            </Segment>
    )
}

export default Routine;