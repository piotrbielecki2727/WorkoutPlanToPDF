import { WorkoutPlan, WorkoutPlanStatesTypes } from "../../Types";



export const checkIfExerciseIsInWorkout = (workoutPlan: WorkoutPlan, exerciseId: number) => {


    const errors = {
        NameError: '',
        MuscleError: '',
    };


    const exerciseExists = workoutPlan.Workouts.some(workout =>
        workout.Exercises.some(exercise => exercise.Id === exerciseId)
    );


    if (exerciseExists) {
        errors.NameError = 'This exercise is already in this workout!';
        return errors;
    }

    return null;



}