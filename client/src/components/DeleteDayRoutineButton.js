function DeleteDayRoutineButton({ dayRoutine }) {



    function deleteDayRoutine(dayRoutine) {
        //console.log(dayRoutine)
        const id = dayRoutine[0].id
        //console.log(id)
        fetch (`/day_routines/${id}`, {
            method: "DELETE",
        })
    }
    
    return <button onClick={() => deleteDayRoutine(dayRoutine)}>deleteRoutine</button>
}

export default DeleteDayRoutineButton;