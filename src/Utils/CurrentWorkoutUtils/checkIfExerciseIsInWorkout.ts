import { WorkoutPlan, WorkoutPlanStatesTypes } from "../../Types";



export const checkIfExerciseIsInWorkout = (workoutPlan: WorkoutPlan, exerciseId: number, editingExerciseId: number | undefined) => {


    let nameError = '';


    const exerciseExists = workoutPlan.Workouts.some(workout =>
        workout.Exercises.some(exercise => exercise.Id === exerciseId)
    );

    if (exerciseExists && editingExerciseId === exerciseId) {
        return null;
    }

    if (exerciseExists) {
        nameError = 'This exercise is already in this workout!';
        return nameError;
    }

    return null;



}