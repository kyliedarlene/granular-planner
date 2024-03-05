import React, { useState } from "react";

function NewRoutineForm({dayId}) {

    const [formData, setFormData] = useState([]);

    function postRoutine() {
        fetch(`/routines`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: formData[0]
            })
        })

        if (dayId != 'none') {
            fetch(`/day_routines`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    day_id: dayId
                })
            })
        }  
    }

    function handleSubmit(e) {
        e.preventDefault();
        postRoutine();
    }

    function handleChange(e) {
        setFormData([
          e.target.value
        ]);
      }

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder = "name your new Routine"
            value = {formData}
            onChange = {handleChange}/>
            <button type="submit">Submit</button>
        </form>
    )
    //form takes in a name and make a new routine
    //return takes us to /update-routine/:id
}

export default NewRoutineForm;