import NewRoutineForm from "../components/NewRoutineForm";
import {Routes, Route} from 'react-router-dom'
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

import { Container, Header, Segment, Divider, Button } from 'semantic-ui-react'

function Home() {
    const navigate = useNavigate();
    
    return (
        <Container textAlign="center">
            <NavBar />
            <Segment padded='very'>
                <Header as='h2' padded='very'>
                    Sometimes routines aren't quite as...well...<i>routine</i> as we'd like them to be.
                </Header>
                <Divider fitted/>
                <Header as='h3'>
                    Granular Planner takes the decision paralysis out of everyday tasks by storing customized templates of your routines. 
                    If you're stuck on step one of laundry day or trying to muster the energy for grocery shopping, pulling out a step-by-step 
                    breakdown of the tasks at hand can help get the ball rolling.
                </Header>
                <Header as='h3'>
                    Routine templates are for the processes we repeat over and over, like cleaning the house, packing for a trip, 
                    and the infamous laundry. Day templates are collections of routines that make up a specific type of day, be that
                    Gym Day or Grocery Day, workday or weekend.
                </Header>
                <Button 
                    size='big' 
                    color='olive'
                    onClick={() => navigate('/manage-routines')}
                >
                    Get Started!
                </Button>
            </Segment>
        </Container>
        
    )
}

export default Home;