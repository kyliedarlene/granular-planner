import React, { useState } from "react";

function NewRoutineForm(
    //coming from RoutineMenu
) {

    const [formData, setFormData] = useState([]);

    function postRoutine() {
        console.log(formData)
        fetch(`/routines`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: formData[0]
            })
        })
    //     const config = {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(formData),
    //     };
    //     const res = await fetch("//localhost:5555/routines", config);
    //     const newRoutine = await res.json();
    //     setFormData("")
    //   
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("name: "+formData)
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