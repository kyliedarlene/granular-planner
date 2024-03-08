import { Link } from "react-router-dom";
import { Header, Segment, Button, ButtonGroup } from 'semantic-ui-react'
//link to home
//link to days
//link to routine menu

function NavBar(){


    return(
        <Segment align='center'>
            <Header as='h1'>GRANULAR PLANNER</Header>
            <ButtonGroup widths='5'> 
                <Button fluid>
                    <Link to={`/`}>Home</Link>
                </Button>
                <Button fluid>
                    <Link to={`/manage-routines`}>Routine Templates</Link>
                </Button>
                <Button fluid>
                    <Link to={`/days`}>Day Templates</Link>
                </Button>
            </ButtonGroup>
        </Segment>
    )
}

export default NavBar;