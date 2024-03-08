import RoutineMenu from "../components/RoutineMenu";
import NavBar from "../components/NavBar";

function ManageRoutines() {
    return (
        <>
            <NavBar/>
            <h1>Which routine would you like to manage?</h1>
            <RoutineMenu />
        </>
    )
}

export default ManageRoutines;