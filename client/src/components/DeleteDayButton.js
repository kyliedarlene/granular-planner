import React from "react";
import { useNavigate } from "react-router-dom";

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

    return <button onClick={() => handleDeleteDay(day)}>[delete {day.name}]</button>
}

export default DeleteDayButton;