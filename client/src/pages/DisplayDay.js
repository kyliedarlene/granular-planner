import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import AddRoutine from "../components/AddRoutine.js";
import Routine from "../components/Routine";
import DeleteDayRoutineButton from "../components/DeleteDayRoutineButton.js";

function DisplayDay() {
    const [day, setDay] = useState({})
    const [routines, setRoutines] = useState([])
    const params = useParams();
    const dayId = parseInt(params.id)

    useEffect(() => {
        fetch(`/days/${dayId}`)
            .then(response => response.json())
            .then(data => {
                setDay(data)
                setRoutines(data.day_routines)
            })
    }, []);

    function handleDeleteDayRoutine(dayRoutine) {
        const id = dayRoutine.id
        fetch (`/day_routines/${id}`, {
            method: "DELETE",
        })

        const index = routines.indexOf(dayRoutine)
        const newRoutines = [...routines]
        newRoutines.splice(index, 1)
        setRoutines([newRoutines])
    }

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
                <div id={"routine-container"} key={day_routine.id * 1000}>
                    <Routine 
                        key={day_routine.id} 
                        dayId={day_routine.day_id} 
                        routineId={day_routine.routine_id} 
                        dayRoutine={dayRoutines.filter((dayRoutine) => dayRoutine['id'] == day_routine.id)}
                    />
                    <DeleteDayRoutineButton 
                        key={(day_routine.id) * 100} 
                        dayRoutine={day_routine}
                        handleDeleteDayRoutine={handleDeleteDayRoutine} 
                    />
                </div>
            ))}
            {/* <AddRoutine dayId={dayId} /> */}
        </div>
    )
}

export default DisplayDay;