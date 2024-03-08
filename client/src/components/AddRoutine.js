import React, { useState, useEffect } from "react";
import { Button } from 'semantic-ui-react'

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
            <Button type="submit" color='green'>Add Routine</Button>
        </form>
    );
}


export default AddRoutine;