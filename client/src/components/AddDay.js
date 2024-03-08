import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from 'semantic-ui-react'

function AddDay() {

    const [formData, setFormData] = useState([]);
    const navigate = useNavigate();

    function postDay() {
        fetch(`/days`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: formData[0]
            })
        })
            .then(r => r.json())
            .then(newDay => navigate(`/day/${newDay.id}`))
    }

    function handleSubmit(e) {
        e.preventDefault();
        postDay();
        setFormData("")
        // props.onAddDay()
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
                placeholder = "New Day Name"
                value = {formData}
                onChange = {handleChange}
                action={{ color: 'green', content: 'Create Day' }}
            />
            {/* <button type="submit">Submit</button> */}
        </form>
    )
    //form takes in a name and make a new routine
    //return takes us to /update-routine/:id
}

export default AddDay;