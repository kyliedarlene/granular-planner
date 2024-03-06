import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import AddRoutine from "../components/AddRoutine.js";

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

    if (dayRoutines) {
        dayRoutines.sort((a , b) => {
            const posA = a.position
            const posB = b.position
            if (posA < posB){
                return -1
            }
            if (posA > posB){
                return 1
            }
        })}

    return (
        <div id={"display-day"}>
            <h1>{day.name}</h1>
            {dayRoutines.map((day_routine) => (
                <Routine key={day_routine.id} dayId = {day_routine.day_id} routineId={day_routine.routine_id} dayRoutine = {dayRoutines.filter((dayRoutine) => dayRoutine['id'] == day_routine.id)}/>
            ))}
            <AddRoutine dayId = {dayId}/>
        </div>
    )
}

export default DisplayDay;