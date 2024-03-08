import AddRoutine from './AddRoutine';
import DeleteDayButton from './DeleteDayButton';

import {
    Card,
    Segment,
    Divider,
    Container,
    Header
  } from 'semantic-ui-react'

function EditDay({ day, handleAddDayRoutine}) {
    return (
        <Segment id='edit-day' secondary>
            <Header as='h3'>Edit Day Template</Header>
            <AddRoutine 
                dayId={day.id} 
                handleAddDayRoutine={handleAddDayRoutine}
            />
            <DeleteDayButton day={day} />
        </Segment>
    )
}

export default EditDay;