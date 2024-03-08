import { Link } from "react-router-dom";
import { Segment } from 'semantic-ui-react'

function DaysMenu({ days }) {
    return (
        <div id={"days-menu"}>
            <Segment padded>
                {days.map((day) => (
                    <Segment key={day.id}>
                        <Link to={`/day/${day.id}`}>{day.name}</Link>
                    </Segment>
                ))}
            </Segment>
        </div>
    )
}

export default DaysMenu;