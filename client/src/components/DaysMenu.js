import { Link } from "react-router-dom";
import AddDay from "./AddDay"

function DaysMenu({ days }) {
    return (
        <div id={"days-menu"}>
            {days.map((day) => (
                <button key={day.id}>
                    <Link to={`/day/${day.id}`}>{day.name}</Link>
                </button>
            ))}
        </div>
    )
}

export default DaysMenu;