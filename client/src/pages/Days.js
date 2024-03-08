import DaysMenu from "../components/DaysMenu";
import NavBar from "../components/NavBar";
import AddDay from "../components/AddDay";
import { useState, useEffect } from "react";
import { Segment, Header, Divider } from 'semantic-ui-react'

function Days() {
    const [days, setDays] = useState([])

    useEffect(() => {
        fetch("/days")
            .then(response => response.json())
            .then(data => setDays(data))
    }, []);
    
    return (
        <>
        <NavBar/>
        <Segment padded='very' align='center'>
            <Header as='h3'>Choose a day to view and manage:</Header>
            <DaysMenu days={days} />
            <Divider horizontal>Or</Divider>
            <Header as='h3'>Create a new day template:</Header>
            <AddDay />
        </Segment>
        </>
    )
}

export default Days;