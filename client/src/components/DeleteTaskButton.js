function DeleteTaskButton({ routineTask, handleDeleteRoutineTask }) {
    return <button onClick={() => handleDeleteRoutineTask(routineTask)}>[x]</button>
}

export default DeleteTaskButton;