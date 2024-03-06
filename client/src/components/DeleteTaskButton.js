function DeleteTaskButton({ routineTask, handleDeleteRoutineTask }) {

    // function deleteRoutineTask(routineTask) {
    //     //console.log(routineTask)
    //     //console.log(routineTask[0].id)
    //     fetch (`/routine_tasks/${routineTask.id}`, {
    //         method: "DELETE",
    //     })
    // }
    
    return (
        <button onClick={() => handleDeleteRoutineTask(routineTask)}>[x]</button>
    )
}

export default DeleteTaskButton;