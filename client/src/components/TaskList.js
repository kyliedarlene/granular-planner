import { useState, useEffect } from "react";

import Task from "./Task";
import AddTask from "./AddTask";


function TaskList({ routine, id }) {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch(`/routine/tasks/${id}`)
            .then(response => response.json())
            .then(data => setTasks(data))
    }, []);

    const orderedTasks = []
    if (tasks.length > 0) {
        tasks.sort((a , b) => {
            const posA = a.position
            const posB = b.position
            if (posA < posB){
                return -1
            }
            if (posA > posB){
                return 1
            }
        })
        tasks.map((task) => {
            orderedTasks.push(task)
        })
    } 

    return (
        <div id="task-list">
            {
                orderedTasks.map((task) => (
                    <Task key={task.id} routine = {routine} task={task}/>
                ))
            }
            <AddTask routine={routine}/>
        </div>
    )
}

export default TaskList;