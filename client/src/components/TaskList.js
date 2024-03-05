import Task from "./Task";
import AddTask from "./AddTask";

function TaskList({ routine }) {
    let tasks = []
    const routineTasks = routine.routine_tasks
    if (routineTasks) {
        // console.log(routineTasks)
        routineTasks.map((routineTask) => {
            tasks.push(routineTask.task)
        })
    } 

    console.log(tasks)

    return (
        <div id="task-list">
            {
                tasks.map((task) => (
                    <Task key={task.id} task={task}/>
                ))
            }
            <AddTask/>
        </div>
    )
}

export default TaskList;