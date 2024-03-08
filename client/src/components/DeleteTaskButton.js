import { Button, Icon } from 'semantic-ui-react'

function DeleteTaskButton({ routineTask, handleDeleteRoutineTask }) {
    return (
        <Button onClick={() => handleDeleteRoutineTask(routineTask)} >
            <Icon name='delete' />
        </Button>
    )
}

export default DeleteTaskButton;