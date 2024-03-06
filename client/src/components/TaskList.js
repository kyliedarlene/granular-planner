import { useState, useEffect } from "react";

import Task from "./Task";
import AddTask from "./AddTask";


function TaskList({ routineId, routineTasks, handleDeleteRoutineTask }) {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch(`/routine/tasks/${routineId}`)
            .then(response => response.json())
            .then(data => setTasks(data))
    }, []);

    const orderedRoutineTasks = []
    if (routineTasks.length > 0) {
        routineTasks.sort((a , b) => {
            const posA = a.position
            const posB = b.position
            if (posA < posB){
                return -1
            }
            if (posA > posB){
                return 1
            }
        })
        routineTasks.map((task) => {
            orderedRoutineTasks.push(task)
        })
    } 

    return (
        <div id="task-list">
            <h2>TaskList</h2>
            {
                orderedRoutineTasks.map((routineTask) => (
                    <Task 
                        key={routineTask.id} 
                        routineTask={routineTask} 
                        handleDeleteRoutineTask={handleDeleteRoutineTask} 
                    />
                ))
            }
            {/* <AddTask routine={routine}/> */}
        </div>
    )
}

export default TaskList;