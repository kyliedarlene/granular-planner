import { useParams } from "react-router-dom";

import Routine from "../components/Routine";

function UpdateRoutine() {
    const params = useParams();
    const routineId = parseInt(params.id);
    
    return (
        <>
            <h1>UpdateRoutines Rendered!</h1>
            <Routine id={routineId}/>
        </>
    )
}

export default UpdateRoutine;