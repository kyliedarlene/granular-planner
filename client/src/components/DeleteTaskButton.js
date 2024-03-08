import { Button, Divider, Input, Segment } from 'semantic-ui-react'

function DeleteTaskButton({ routineTask, handleDeleteRoutineTask }) {
    return (
        <Button 
            onClick={() => handleDeleteRoutineTask(routineTask)}
            size = 'small'
            color='red'
            content='Delete Task'
            icon = 'delete'
            labelPosition = 'left'
        >
        </Button>
    )
}

export default DeleteTaskButton;