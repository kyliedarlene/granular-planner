import React, { useState } from "react";

function AddDay(props) {

    const [formData, setFormData] = useState([]);

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
    }

    function handleSubmit(e) {
        e.preventDefault();
        postDay();
        setFormData("")
        props.onAddDay()
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