import { useDispatch } from "react-redux";
import { updateWorkoutPlanStates } from "../../State/WorkoutPlan/workoutPlanStatesSlice";
import { WorkoutPlanStatesTypes } from "../../Types";




export const setCurrentWorkoutId = (id: number, workoutPlanStates: WorkoutPlanStatesTypes, dispatch: Function) => {
    dispatch(updateWorkoutPlanStates({
        ...workoutPlanStates,
        CurrentWorkoutId: id
    }));
}