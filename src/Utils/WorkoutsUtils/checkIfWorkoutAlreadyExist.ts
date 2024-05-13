import { WorkoutPlan, WorkoutPlanStatesTypes } from "../../Types";



export const checkIfWorkoutAlreadyExist = (workoutPlan: WorkoutPlan, workoutName: string) => {


    const errors = {
        NameError: '',
    };


    workoutPlan.Workouts.map(workout => {
        if (workout.Name === workoutName)
            errors.NameError = 'Workout name must be unique!';
    })

    if (errors.NameError)
        return errors;
    else
        return null



}