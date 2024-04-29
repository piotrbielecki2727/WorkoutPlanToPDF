import { useSelector } from "react-redux";
import { WorkoutPlan } from "../Types";
import { RootState } from "../State/store";


export const useWorkoutPlanSelector = (): WorkoutPlan => {
    const workoutPlan: WorkoutPlan = useSelector((state: RootState) => state.workoutPlan.workoutPlan);
    return workoutPlan;
}

