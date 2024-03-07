import DaysMenu from "../components/DaysMenu";
import NavBar from "../components/NavBar";

function Days() {
    return (
        <div id={"days"}>
            <h1>What kind of day is today?</h1>
            <NavBar/>
            <DaysMenu />
        </div>
    )
}

export default Days;