import React, { useState, useEffect } from "react";

function AddRoutine({ dayId, handleAddDayRoutine }) {

    const [routines, setRoutines] = useState([])
    const [selectedRoutine, setSelectedRoutine] = useState("")

    useEffect(() => {
        fetch("/routines")
            .then(response => response.json())
            .then(data => setRoutines(data))
    }, []);
    
    function handleSubmit(e) {
        e.preventDefault();
        handleAddDayRoutine(dayId, selectedRoutine[0]);
        setSelectedRoutine("");
    }

    function handleChange(e) {
        setSelectedRoutine([
          e.target.value
        ]);
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