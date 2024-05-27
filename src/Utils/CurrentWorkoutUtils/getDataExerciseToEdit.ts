import { Workout, WorkoutPlan, WorkoutPlanStatesTypes, Exercise } from "../../Types";

export const getDataExerciseToEdit = (editingExerciseId: number, workoutPlan: WorkoutPlan, workoutPlanStates: WorkoutPlanStatesTypes)
    : Exercise | null => {
    const currentWorkout = workoutPlan.Workouts.find(workout => workout.Id === workoutPlanStates.CurrentWorkoutId);
    if (currentWorkout) {
        const exerciseToEdit = currentWorkout.Exercises.find(exercise => exercise.Id === editingExerciseId);
        if (exerciseToEdit) {
            return exerciseToEdit;
        }
    }
    return null;
};