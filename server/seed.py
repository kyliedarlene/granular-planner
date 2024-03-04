#!/usr/bin/env python3

# Local imports
from app import app
from models import *

if __name__ == "__main__":
  with app.app_context():

    Day.query.delete()
    Routine.query.delete()
    Task.query.delete()
    DayRoutine.query.delete()
    RoutineTask.query.delete()

    print("all db data deleted")

    new_days = [
      Day(
          name = "Weekday"
      ),
      Day(
          name = "Weekend"
      ),
      Day(
          name = "Gym Day"
      )
    ]

    db.session.add_all(new_days) #add_all to add a list
    db.session.commit()

    new_routines = [
        Routine(
            name = "Morning"
        ),
        Routine(
            name = "Bedtime"
        ),
        Routine(
            name = "Get ready for Gym"
        ),
        Routine(
            name = "Workout"
        ),
        Routine(
            name = "Studying"
        ),
        Routine(
            name = "Dog Walk"
        ),

    ]

    db.session.add_all(new_routines) #add_all to add a list
    db.session.commit()

    new_tasks = [
        Task(
            name = "Brush teeth"
        ),
        Task(
            name = "Floss"
        ),
        Task(
            name = "Wash Face"
        ),
        Task(
            name = "Shower"
        ),
        Task(
            name = "Pack gym bag"
        ),
        Task(
            name = "Coding project"
        ),
        Task(
            name = "Cardio"
        ),
        Task(
            name = "Arms"
        ),
        Task(
            name = "Walk dogs"
        ),
        Task(
            name = "Wash dogs"
        )
    ]

    db.session.add_all(new_tasks) #add_all to add a list
    db.session.commit()

    new_day_routines = [
        DayRoutine(
            day_id = 1, #weekday
            routine_id = 1,
            position = 0
        ),
        DayRoutine(
            day_id = 1, #weekday
            routine_id = 5,
            position = 1
        ),
        DayRoutine(
            day_id = 1, #weekday
            routine_id = 6,
            position = 2
        ),
        DayRoutine(
            day_id = 1, #weekday
            routine_id = 2,
            position = 3
        ),
        DayRoutine(
            day_id = 2, #weekend
            routine_id = 1,
            position = 0
        ),
        DayRoutine(
            day_id = 2, #weekend
            routine_id = 6,
            position = 1
        ),
        DayRoutine(
            day_id = 2, #weekend
            routine_id = 5,
            position = 2
        ),
        DayRoutine(
            day_id = 3, #gym
            routine_id = 1,
            position = 0
        ),
        DayRoutine(
            day_id = 3, #gym
            routine_id = 3,
            position = 1
        ),
        DayRoutine(
            day_id = 3, #gym
            routine_id = 4,
            position = 2
        ),
        DayRoutine(
            day_id = 3, #gym
            routine_id = 2,
            position = 3
        )
    ]

    db.session.add_all(new_day_routines) #add_all to add a list
    db.session.commit()

    new_routine_tasks = [
        RoutineTask(
            routine_id = 1, #Morning
            task_id = 1,
            position = 0
        ),
        RoutineTask(
            routine_id = 1, #Morning
            task_id = 3,
            position = 1
        ),
        RoutineTask(
            routine_id = 2, #Bedtime
            task_id = 4,
            position = 0
        ),
        RoutineTask(
            routine_id = 2, #Bedtime
            task_id = 1,
            position = 1
        ),
        RoutineTask(
            routine_id = 2, #Bedtime
            task_id = 2,
            position = 2
        ),
        RoutineTask(
            routine_id = 3, #Get ready for gym
            task_id = 5,
            position = 0
        ),
        RoutineTask(
            routine_id = 4, #workout
            task_id = 7,
            position = 0
        ),
        RoutineTask(
            routine_id = 4, #workout
            task_id = 8,
            position = 1
        ),
        RoutineTask(
            routine_id = 4, #workout
            task_id = 4,
            position = 2
        ),
        RoutineTask(
            routine_id = 5, #Studying
            task_id = 6,
            position = 0
        ),
        RoutineTask(
            routine_id = 6, #dog walk
            task_id = 9,
            position = 0
        ),
        RoutineTask(
            routine_id = 6, #dog walk
            task_id = 10,
            position = 1
        )
    ]

    db.session.add_all(new_routine_tasks) #add_all to add a list
    db.session.commit()

    print("db seeded")