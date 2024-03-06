import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function DaysMenu() {
    const [days, setDays] = useState([])

    useEffect(() => {
        fetch("/days")
            .then(response => response.json())
            .then(data => setDays(data))
    }, []);
    
    return (
        <div id={"days-menu"}>
            <h2>DaysMenu Rendered!</h2>
            {days.map((day) => (
                <button key={day.id}>
                    <Link to={`/day/${day.id}`}>{day.name}</Link>
                </button>
            ))}
            <h3>Add New Day Button</h3>
        </div>
    )
}

export default DaysMenu;