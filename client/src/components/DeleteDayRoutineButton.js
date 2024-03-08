import { Button } from 'semantic-ui-react'

function DeleteDayRoutineButton({ dayRoutine, handleDeleteDayRoutine }) {

    return (
        <Button 
            color='red'
            content={`Remove ${dayRoutine['routine']['name']}`}
            onClick={() => handleDeleteDayRoutine(dayRoutine)}
        >
        </Button>
    )
}

export default DeleteDayRoutineButton;