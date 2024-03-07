import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import DeleteRoutineButton from "../components/DeleteRoutineButton";
import Routine from "../components/Routine";


function UpdateRoutine() {
    const params = useParams();
    const routineId = parseInt(params.id);
    
    return (
        <div>
            <NavBar/>
            <DeleteRoutineButton routineId = {routineId}/>
            <Routine routineId={routineId}/>
        </div>
    )
}

export default UpdateRoutine;