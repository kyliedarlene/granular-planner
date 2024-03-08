import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
            <input
            type="text"
            placeholder = "name your new Day"
            value = {formData}
            onChange = {handleChange}/>
            <button type="submit">Submit</button>
        </form>
    )
    //form takes in a name and make a new routine
    //return takes us to /update-routine/:id
}

export default AddDay;