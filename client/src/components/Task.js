import DeleteTaskButton from "./DeleteTaskButton";

function Task({ routine, task }) {
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
            {/* <h4 onClick={() => updateTask(task.id, "update task test")}>
                {task.name}
            </h4> */}
            {/* <DeleteTaskButton task={task} routine={routine}/>  */}
            <h4>{task.name}</h4>
        </div>
    )
}

export default Task;