import React, { useState, useEffect } from "react";

function AddRoutine({dayId}) {

    const [routines, setRoutines] = useState([])
    const [selectedRoutine, setSelectedRoutine] = useState("")

    useEffect(() => {
        fetch("/routines")
            .then(response => response.json())
            .then(data => setRoutines(data))
    }, []);

    function postDayRoutine() {
        fetch(`/day_routines`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                day_id: dayId,
                routine_id: selectedRoutine[0]
            })
        })
    } 
    
    

    function handleSubmit(e) {
        e.preventDefault();
        postDayRoutine();
        setSelectedRoutine("");
    }

    function handleChange(e) {
        setSelectedRoutine([
          e.target.value
        ]);
        console.log(dayId)
        console.log(selectedRoutine)
    }

    //dropdown menu choosing Routine to add
    return (
        <form onSubmit={handleSubmit}>
            <select value={selectedRoutine} onChange={handleChange}>
                <option value="">Choose a routine</option>
                {routines.map(routine => (
                    <option key={routine.id} value={routine.id}>
                        {routine.name}
                    </option>
                ))}
            </select>
            <button type="submit">Submit</button>
        </form>
    );
}


export default AddRoutine;