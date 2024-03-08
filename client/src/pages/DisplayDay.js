import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import AddRoutine from "../components/AddRoutine.js";
import Routine from "../components/Routine";
import DeleteDayRoutineButton from "../components/DeleteDayRoutineButton.js";
import NavBar from "../components/NavBar.js";
import DeleteDayButton from "../components/DeleteDayButton.js"

import {
    Container,
    CardMeta,
    CardHeader,
    CardDescription,
    CardContent,
    Card,
    Icon,
    Image,
    Segment
  } from 'semantic-ui-react'

function DisplayDay() {
    const [day, setDay] = useState({})
    const [dayRoutines, setDayRoutines] = useState([])
    const params = useParams();
    const dayId = parseInt(params.id)

    useEffect(() => {
        fetch(`/days/${dayId}`)
            .then(response => response.json())
            .then(day => {
                
                // sort day_routines
                const arr = day.day_routines
                if (arr.length > 0) {
                    arr.sort((a , b) => {
                        const posA = a.position
                        const posB = b.position
                        if (posA < posB){
                            return -1
                        }
                        if (posA > posB){
                            return 1
                        }
                    })}

                // set state
                setDay(day)
                setDayRoutines(arr)
            })
    }, []);

    function handleAddDayRoutine(dayId, routineId) {
        fetch(`/day_routines`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                day_id: dayId,
                routine_id: routineId
            })
        })
            .then(response => response.json())
            .then((newDayRoutine) => {
                const newDayRoutines = [...dayRoutines]
                newDayRoutines.push(newDayRoutine)
                setDayRoutines(newDayRoutines)
            })
    }

    function handleDeleteDayRoutine(dayRoutine) {
        const id = dayRoutine.id
        fetch (`/day_routines/${id}`, {
            method: "DELETE",
        })

        const index = dayRoutines.indexOf(dayRoutine)
        const newDayRoutines = [...dayRoutines]
        newDayRoutines.splice(index, 1)
        setDayRoutines(newDayRoutines)
    }

    return (
        <div id={"display-day"}>
            <NavBar/>
            <h1>{day.name}</h1>
                {dayRoutines.map((dayRoutine) => (
                    <Card id={"routine-container"} key={dayRoutine.id * 1000}>
                        <Routine
                            key={dayRoutine.id}
                            display={"view"} 
                            routineId={dayRoutine.routine_id} 
                        />
                        <DeleteDayRoutineButton 
                            key={(dayRoutine.id) * 100} 
                            dayRoutine={dayRoutine}
                            handleDeleteDayRoutine={handleDeleteDayRoutine} 
                        />
                    </Card>
                ))}
            <DeleteDayButton day={day} />
            <AddRoutine 
                dayId={dayId} 
                handleAddDayRoutine={handleAddDayRoutine}
            />
        </div>
    )
}

export default DisplayDay;