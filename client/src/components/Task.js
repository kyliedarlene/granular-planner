function Task({ task }) {
    function updateTask(id, newTaskName) {
        fetch(`/tasks/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: newTaskName
            })
        })
    }

    return (
        <h4 onClick={() => updateTask(task.id, "update task test")}>
            {task.name}
        </h4>
    )
}

export default Task;