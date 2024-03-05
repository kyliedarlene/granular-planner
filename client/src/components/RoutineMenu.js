import { useState, useEffect } from "react";

function RoutineMenu() {
    const [routines, setRoutines] = useState([])

    useEffect(() => {
        fetch("/routines")
            .then(response => response.json())
            .then(data => setRoutines(data))
    }, []);

    return (
        <div id="routine-menu">
            {routines.map((routine) => (
                <button key={routine.id}>{routine.name}</button>
            ))}
            <button>+ New Routine</button>
        </div>
    )
}

export default RoutineMenu;