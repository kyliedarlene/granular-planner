import DeleteTaskButton from "./DeleteTaskButton";

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
        <div id="task">
            <DeleteTaskButton id={task.id}/>
            <h4 onClick={() => updateTask(task.id, "update task test")}>
                {task.name}
            </h4>
        </div>
    )
}

export default Task;