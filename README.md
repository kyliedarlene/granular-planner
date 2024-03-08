# Phase-4 Project - Granular Planner

## User Stories

Granular Planner provides users a way to organize their daily schedules in a granular way.
    Users can 
        - View kinds of Days (e.g. Weekend, Weekday etc.), the Routines within them and the Tasks that make up those Routines
        - Edit, add and remove Days, Routines and Tasks

## React Components and Routing



## Backend and Databases

Our backend has Days, Routines and Tasks stored in databases. Days and Routines have a many-to-many relationship and are connected by an intermediary database DayRoutine. Routines and Tasks have a many-to-many relationship and are connected by an intermediary database RoutineTask.
A Day has many Routines. Routines belong to many Days and have many Tasks. Tasks belong to many Routines.
Day, Routine and Task have keys id and name- names must be strings less than 20 characters
DayRoutine and RoutineTask have foreign keys that connect to the other databases and a key "position" that determines what order they appear in.

