function DeleteTaskButton({ task, routine }) {

    function deleteRoutineTask(task, routine) {
        //console.log(routineTask)
        //console.log(routineTask[0].id)
        fetch (`/routine/${routine.id}/task/${task.id}`, {
            method: "DELETE",
        })
    }
    
    return <button onClick={() => deleteRoutineTask(task, routine)}>[x]</button>
}

export default DeleteTaskButton;