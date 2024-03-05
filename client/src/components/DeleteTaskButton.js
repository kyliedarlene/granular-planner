function DeleteTaskButton({ id }) {
    function deleteTask(id) {
        fetch (`/tasks/${id}`, {
            method: "DELETE",
        })
    }
    
    return <button onClick={() => deleteTask(id)}>[x]</button>
}

export default DeleteTaskButton;