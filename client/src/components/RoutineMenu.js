import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NewRoutineForm from "../components/NewRoutineForm";

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
                <button key={routine.id}>
                    <Link to={`/update-routine/${routine.id}`}>{routine.name}</Link>
                </button>
            ))}
            <NewRoutineForm dayId= {'none'}/>
            {/* <button>
                <Link to="/new-routine">+ New Routine</Link>
            </button> */}
            
        </div>
    )
}

export default RoutineMenu;