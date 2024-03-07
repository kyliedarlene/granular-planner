import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddDay from "./AddDay"

function DaysMenu() {
    const [days, setDays] = useState([])

    useEffect(() => {
        fetch("/days")
            .then(response => response.json())
            .then(data => setDays(data))
    }, []);

    const handleAddDay = () => {
        fetch("/days")
            .then(response => response.json())
            .then(data => setDays(data));
    };
    
    return (
        <div id={"days-menu"}>
            <h2>DaysMenu Rendered!</h2>
            {days.map((day) => (
                <button key={day.id}>
                    <Link to={`/day/${day.id}`}>{day.name}</Link>
                </button>
            ))}
            <AddDay onAddDay = {handleAddDay}/>
        </div>
    )
}

export default DaysMenu;