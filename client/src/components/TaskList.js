import { useState, useEffect } from "react";
import Task from "./Task";
import AddTask from "./AddTask";
import {
    ItemMeta,
    ItemImage,
    ItemHeader,
    ItemGroup,
    ItemExtra,
    ItemDescription,
    ItemContent,
    Image,
    Item,
    SegmentGroup
  } from 'semantic-ui-react'

function TaskList({ 
    routineId, 
    routineTasks, 
    handleAddRoutineTask, 
    handleDeleteRoutineTask,
    display
}) {
    const orderedRoutineTasks = []
    if (routineTasks.length > 0) {
        routineTasks.sort((a , b) => {
            const posA = a.position
            const posB = b.position
            if (posA < posB){
                return -1
            }
            if (posA > posB){
                return 1
            }
        })
        routineTasks.map((task) => {
            orderedRoutineTasks.push(task)
        })
    } 

    return (
        <SegmentGroup compact>
            {
                orderedRoutineTasks.map((routineTask) => (
                    <Task 
                        key={routineTask.id} 
                        routineTask={routineTask} 
                        handleDeleteRoutineTask={handleDeleteRoutineTask} 
                        display={display}
                    />
                ))
            }
            {display === "view" ?
                null :
                <AddTask 
                    routineId={routineId} 
                    handleAddRoutineTask={handleAddRoutineTask} 
                />
            }
        </SegmentGroup>
    )
}

export default TaskList;