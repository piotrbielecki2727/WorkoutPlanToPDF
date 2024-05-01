export type Set = {
    Sets: number,
    Reps: number,
    Weight: number,
    Rest: number,
}

export type Exercise = {
    Id: number,
    Name: string,
    Muscle: string,
    Sets: Set,
}


export type Workout = {
    Id: number,
    Name: string,
    Exercises: Exercise[];
}

export type WorkoutPlan = {
    Name: string,
    Person: string,
    Author: string,
    Workouts: Workout[];
}

export type Errors = {
    NameError: string;
    PersonError: string;
    AuthorError: string;
}

export type WorkoutErrors = {
    NameError: string;
}

export type WorkoutPlanStatesTypes = {
    isWorkoutPlanCreated: boolean,
    doWorkoutsExist: boolean,
    CurrentWorkoutId: number,
}