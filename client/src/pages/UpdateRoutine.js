import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import DeleteRoutineButton from "../components/DeleteRoutineButton";
import Routine from "../components/Routine";
import { Segment } from 'semantic-ui-react'

function UpdateRoutine() {
    const params = useParams();
    const routineId = parseInt(params.id);
    
    return (
        <div>
            <NavBar/>
            <Segment padded='very'>
                <Routine routineId={routineId}/>
            </Segment>
        </div>
    )
}

export default UpdateRoutine;