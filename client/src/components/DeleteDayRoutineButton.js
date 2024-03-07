function DeleteDayRoutineButton({ dayRoutine }) {

    function deleteDayRoutine(dayRoutine) {
        //console.log(dayRoutine)
        const id = dayRoutine.id
        //console.log(id)
        fetch (`/day_routines/${id}`, {
            method: "DELETE",
        })
    }
    console.log(dayRoutine)
    
    return (
        <button onClick={() => deleteDayRoutine(dayRoutine)}>
            {`Remove ${dayRoutine.routine.name}`}
        </button>
    )
}

export default DeleteDayRoutineButton;