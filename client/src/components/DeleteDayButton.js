import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from 'semantic-ui-react'

function DeleteDayButton({day}) {

    const navigate = useNavigate();

    function handleDeleteDay(day){
        //console.log(day)
        const id = day.id
        //console.log(id)
        fetch (`/days/${id}`, {
            method: "DELETE",
        })
        .then(() => {
            // Navigate back to the previous page
            navigate("/days")
        })
        //nav to days
    }

    return (
        <Button 
            basic
            color="red"
            onClick={() => handleDeleteDay(day)}
        >
                Delete {day.name} Template
        </Button>
    )
}

export default DeleteDayButton;