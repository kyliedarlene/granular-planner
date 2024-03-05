import Task from "./Task";
import AddTask from "./AddTask";


function TaskList({ routine }) {
    let tasks = []
    const routineTasks = routine.routine_tasks
    //routineTasks is a list of RoutineTask Objects
    //[{}, {}, {}]
    //sort by position
    
    if (routineTasks) {
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
        //console.log(routineTasks)
        routineTasks.map((routineTask) => {
            tasks.push(routineTask.task)
        })
    } 

    return (
        <div id="task-list">
            {
                tasks.map((task) => (
                    <Task key={task.id} routine = {routine} task={task} routineTask = {routineTasks.filter((routineTask) => routineTask['task_id'] == task.id)}/>
                ))
            }
            <AddTask routine={routine}/>
        </div>
    )
}

export default TaskList;