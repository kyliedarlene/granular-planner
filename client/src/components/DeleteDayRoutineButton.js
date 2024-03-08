function DeleteDayRoutineButton({ dayRoutine, handleDeleteDayRoutine }) {

    return (
        <button onClick={() => handleDeleteDayRoutine(dayRoutine)}>
            {`Remove ${dayRoutine['routine']['name']}`}
        </button>
    )
}

export default DeleteDayRoutineButton;