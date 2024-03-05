function DeleteTaskButton({ routineTask }) {



    function deleteRoutineTask(routineTask) {
        console.log(routineTask)
        console.log(routineTask[0].id)
        const id = routineTask[0].id
        fetch (`/routine_tasks/${id}`, {
            method: "DELETE",
        })
    }
    
    return <button onClick={() => deleteRoutineTask(routineTask)}>[x]</button>
}

export default DeleteTaskButton;