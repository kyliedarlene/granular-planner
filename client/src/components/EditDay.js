import AddRoutine from './AddRoutine';
import DeleteDayButton from './DeleteDayButton';

import { Segment, Header, Divider } from 'semantic-ui-react'

function EditDay({ day, handleAddDayRoutine}) {
    return (
        <Segment id='edit-day' secondary>
            <Header as='h3'>Edit Template</Header>
            <AddRoutine 
                dayId={day.id} 
                handleAddDayRoutine={handleAddDayRoutine}
            />
            <Divider horizontal>Or</Divider>
            <DeleteDayButton day={day} />
        </Segment>
    )
}

export default EditDay;