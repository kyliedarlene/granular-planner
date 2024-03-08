import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from 'semantic-ui-react'

function NewRoutineForm({dayId}) {

    const [formData, setFormData] = useState([]);
    const navigate = useNavigate();

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
            .then(r => r.json())
            .then((newRoutine) => navigate(`/update-routine/${newRoutine.id}`))

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
            <Input
                type="text"
                placeholder = "New Routine Name"
                value = {formData}
                onChange = {handleChange}
                action={{ color: 'green', content: 'Create Routine' }}
            />
            {/* <button type="submit">Submit</button> */}
        </form>
    )
    //form takes in a name and make a new routine
    //return takes us to /update-routine/:id
}

export default NewRoutineForm;