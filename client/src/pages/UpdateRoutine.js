import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

import Routine from "../components/Routine";

function UpdateRoutine() {
    const params = useParams();
    const routineId = parseInt(params.id);
    
    return (
        <div>
            <NavBar/>
            <Routine routineId={routineId}/>
        </div>
    )
}

export default UpdateRoutine;