import { useParams } from "react-router-dom";

import Routine from "../components/Routine";

function UpdateRoutine() {
    const params = useParams();
    const routineId = parseInt(params.id);
    
    return (
        <Routine routineId={routineId}/>
    )
}

export default UpdateRoutine;