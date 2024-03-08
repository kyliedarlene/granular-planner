import DaysMenu from "../components/DaysMenu";
import NavBar from "../components/NavBar";
import AddDay from "../components/AddDay"

import { Segment, Header, Divider } from 'semantic-ui-react'

function Days() {
    return (
        <>
        <NavBar/>
        <Segment padded='very' align='center'>
            <Header as='h3'>Choose a day to view and manage:</Header>
            <DaysMenu />
            <Divider horizontal>Or</Divider>
            <Header as='h3'>Create a new day template:</Header>
            
        </Segment>
        </>
    )
}

export default Days;