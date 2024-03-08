import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Segment } from 'semantic-ui-react'

function RoutineMenu() {
    const [routines, setRoutines] = useState([])

    useEffect(() => {
        fetch("/routines")
            .then(response => response.json())
            .then(data => setRoutines(data))
    }, []);

    return (
        <div id="routine-menu">
            <Segment padded>
                {routines.map((routine) => (
                    <Segment key={routine.id} fluid>
                        <Link to={`/update-routine/${routine.id}`}>{routine.name}</Link>
                    </Segment>
                ))}
            </Segment>
        </div>
    )
}

export default RoutineMenu;