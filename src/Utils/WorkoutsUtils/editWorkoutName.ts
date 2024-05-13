import { WorkoutPlan } from "../../Types";



export const editWorkoutName = (workoutPlan: WorkoutPlan, ActualWorkoutId: number, formData: string, dispatch: Function, updateWorkoutPlan: Function) => {
    const updatedWorkouts = workoutPlan.Workouts.map(workout => {
        if (workout.Id === ActualWorkoutId) {
            return { ...workout, Name: formData };
        }
        return workout;
    });

    dispatch(updateWorkoutPlan({
        ...workoutPlan,
        Workouts: updatedWorkouts,
    }))
}

