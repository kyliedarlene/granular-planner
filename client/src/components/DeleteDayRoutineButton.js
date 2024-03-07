function DeleteDayRoutineButton({ dayRoutine, handleDeleteDayRoutine }) {
    // console.log(dayRoutine)

    return (
        <button onClick={() => handleDeleteDayRoutine(dayRoutine)}>
            {`Remove`}
        </button>
    )
}

export default DeleteDayRoutineButton;