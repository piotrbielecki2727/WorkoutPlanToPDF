import { WorkoutPlan, WorkoutPlanStatesTypes } from "../../Types";



export const checkIfWorkoutsExist = (workoutPlan: WorkoutPlan, workoutPlanStates: WorkoutPlanStatesTypes, dispatch: Function, updateWorkoutPlanStates: Function) => {

    if (workoutPlan.Workouts.length === 0) {
        dispatch(
            updateWorkoutPlanStates({
                ...workoutPlanStates,
                doWorkoutsExist: false,
                CurrentWorkoutId: 0,
            })
        );
    }
}