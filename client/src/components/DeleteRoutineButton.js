import React from "react";
import { useNavigate } from "react-router-dom";

function DeleteRoutineButton({routineId}) {

    const navigate = useNavigate();

    function handleDeleteRoutine(routineId){
        //console.log(routineId)
        fetch (`/routines/${routineId}`, {
            method: "DELETE",
        })
        .then(() => {
            // Navigate back to the previous page
            navigate("/manage-routines")
        })
        //nav to days
    }

    return <button onClick={() => handleDeleteRoutine(routineId)}>[delete Routine]</button>
}

export default DeleteRoutineButton;