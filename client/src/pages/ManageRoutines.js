import RoutineMenu from "../components/RoutineMenu";
import NavBar from "../components/NavBar";
import NewRoutineForm from "../components/NewRoutineForm";


import { Segment, Header, Divider } from 'semantic-ui-react'

function ManageRoutines() {
    return (
        <>
            <NavBar/>
            <Segment padded='very' align='center'>
                <Header as='h3'>Choose a routine to manage:</Header>
                <RoutineMenu />
                <Divider horizontal>Or</Divider>
                <Header as='h3'>Create a new routine:</Header>
                <NewRoutineForm dayId= {'none'}/>
            </Segment>
        </>
    )
}

export default ManageRoutines;