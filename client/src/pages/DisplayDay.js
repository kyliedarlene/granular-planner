import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Routine from "../components/Routine";

function DisplayDay() {
    const [day, setDay] = useState({})
    const params = useParams();
    const dayId = parseInt(params.id)

    useEffect(() => {
        fetch(`/days/${dayId}`)
            .then(response => response.json())
            .then(data => setDay(data))
    }, []);

    let dayRoutines = []
    if (Object.keys(day).length > 0) {
        dayRoutines = day.day_routines;
    }

    return (
        <div id={"display-day"}>
            <h1>{day.name}</h1>
            {dayRoutines.map((day_routine) => (
                <Routine key={day_routine.id} id={day_routine.routine_id}/>
            ))}
        </div>
    )
}

export default DisplayDay;