import { useSelector } from "react-redux";
import { WorkoutPlan, WorkoutPlanStatesTypes } from "../Types";
import { RootState } from "../State/store";


export const useWorkoutPlanStatesSelector = (): WorkoutPlanStatesTypes => {
    const workoutPlanStates: WorkoutPlanStatesTypes = useSelector((state: RootState) => state.workoutPlanStates.workoutPlanStates);
    return workoutPlanStates;
}

