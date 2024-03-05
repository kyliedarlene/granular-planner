import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
            <button>
                <Link to="/new-routine">+ New Routine</Link>
            </button>
            
        </div>
    )
}

export default RoutineMenu;