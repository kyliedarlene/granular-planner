import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import AddRoutine from "../components/AddRoutine.js";
import Routine from "../components/Routine";
import DeleteDayRoutineButton from "../components/DeleteDayRoutineButton.js";

function DisplayDay() {
    const [day, setDay] = useState({})
    const [dayRoutines, setDayRoutines] = useState([])
    const params = useParams();
    const dayId = parseInt(params.id)

    useEffect(() => {
        fetch(`/days/${dayId}`)
            .then(response => response.json())
            .then(data => {
                setDay(data)
                setDayRoutines(data.day_routines)
            })
    }, []);

    function handleDeleteDayRoutine(dayRoutine) {
        const id = dayRoutine.id
        fetch (`/day_routines/${id}`, {
            method: "DELETE",
        })

        const index = dayRoutines.indexOf(dayRoutine)
        const newDayRoutines = [...dayRoutines]
        newDayRoutines.splice(index, 1)
        setDayRoutines([newDayRoutines])
    }

    let orderedDayRoutines = []
    // if (dayRoutines.length > 0) {
    //     dayRoutines = day.day_routines;
    // }

    if (dayRoutines.length > 0) {
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
        dayRoutines.map((dayRoutine) => {
            orderedDayRoutines.push(dayRoutine)
        })

    console.log(day)

    return (
        <div id={"display-day"}>
            <h1>{"DAY"}</h1>
            {orderedDayRoutines.map((day_routine) => (
                <div id={"routine-container"} key={day_routine.id * 1000}>
                    <Routine 
                        key={day_routine.id} 
                        dayId={day_routine.day_id} 
                        routineId={day_routine.routine_id} 
                        dayRoutine={orderedDayRoutines.filter((dayRoutine) => dayRoutine['id'] == day_routine.id)}
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