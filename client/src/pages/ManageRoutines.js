import RoutineMenu from "../components/RoutineMenu";
import NavBar from "../components/NavBar";

function ManageRoutines() {
    return (
        <>
            <NavBar/>
            <h1>Select a routine to update:</h1>
            <RoutineMenu />
        </>
    )
}

export default ManageRoutines;