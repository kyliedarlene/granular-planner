from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin

from config import db

class Day(db.Model, SerializerMixin):
    __tablename__ = 'days'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)

    # Add relationship
    day_routines = db.relationship('DayRoutine', back_populates = 'day')
    # Add serialization rules to prevent recursion
    serialize_rules = ('-day_routines.day', ) #make sure they're tuples

    @validates('name')
    def validate_description(self, key, value):
        if not value or len(value) > 20:
            raise ValueError('name must be present and less than 20 characters long')
        return value


class Routine(db.Model, SerializerMixin):
    __tablename__ = 'routines'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)

    # Add relationship
    day_routines = db.relationship('DayRoutine', back_populates = 'routine')
    routine_tasks = db.relationship('RoutineTask', back_populates = 'routine')
    # Add serialization rules to prevent recursion
    serialize_rules = ('-day_routines.routine', '-routine_tasks.routine' ) #make sure they're tuples

    # Association proxy to get tasks through routine_tasks
    tasks = association_proxy("routine_tasks", "task",
                              creator=lambda task_obj: RoutineTask(task=task_obj))

    # Add validation
    @validates('name')
    def validate_description(self, key, value):
        if not value or len(value) > 20:
            raise ValueError('name must be present and less than 20 characters long')
        return value

class DayRoutine(db.Model, SerializerMixin):
    __tablename__ = 'day_routines'

    id = db.Column(db.Integer, primary_key=True)
    day_id = db.Column(db.Integer, db.ForeignKey('days.id'))
    routine_id = db.Column(db.Integer, db.ForeignKey('routines.id'))
    position = db.Column(db.Integer)

    # Add relationships
    day = db.relationship('Day', back_populates = 'day_routines')
    routine = db.relationship('Routine', back_populates = 'day_routines')
    # Add serialization rules to prevent recursion
    serialize_rules = ('-day.day_routines', '-routine.day_routines')

    # Add validation

class Task(db.Model, SerializerMixin):
    __tablename__ = 'tasks'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)

    # Add relationship
    routine_tasks = db.relationship('RoutineTask', back_populates = 'task')
    # Add serialization rules to prevent recursion
    serialize_rules = ('-droutine_tasks.task', ) #make sure they're tuples

    # Association proxy to get routines through routine_tasks
    routines = association_proxy("routine_tasks", "routine",
                              creator=lambda routine_obj: RoutineTask(routine=routine_obj))

    @validates('name')
    def validate_description(self, key, value):
        if not value or len(value) > 20:
            raise ValueError('name must be present and less than 20 characters long')
        return value

class RoutineTask(db.Model, SerializerMixin):
    __tablename__ = 'routine_tasks'

    id = db.Column(db.Integer, primary_key=True)
    routine_id = db.Column(db.Integer, db.ForeignKey('routines.id'))
    task_id = db.Column(db.Integer, db.ForeignKey('tasks.id'))
    position = db.Column(db.Integer)

    # Add relationships
    routine = db.relationship('Routine', back_populates = 'routine_tasks')
    task = db.relationship('Task', back_populates = 'routine_tasks')
    
    # Add serialization rules to prevent recursion
    serialize_rules = ('-routine.routine_tasks', '-task.routine_tasks')

    # Add validation
# add any models you may need.