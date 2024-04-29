import { WorkoutPlan } from "../../Types";


export const findWorkout = (currentWorkoutId: number, workoutPlan: WorkoutPlan) => {
    if (currentWorkoutId !== 0) {
        const currentWorkout = workoutPlan.Workouts.find(workout => workout.Id === currentWorkoutId)
        if (currentWorkout) {
            return currentWorkout;
        }
    }
    return null;
}