import React from "react";
import { useNavigate } from "react-router-dom";

import { Button } from 'semantic-ui-react'

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

    return (
        <Button 
            attached='bottom'
            size='medium'
            basic color='red'
            onClick={() => handleDeleteRoutine(routineId)}
        >
            Delete Routine
        </Button>
    )
}

export default DeleteRoutineButton;