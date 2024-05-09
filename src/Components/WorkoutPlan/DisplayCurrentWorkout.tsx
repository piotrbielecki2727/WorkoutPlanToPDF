import { FC } from "react";
import { useWorkoutPlanSelector } from "../../Hooks/useWorkoutPlanSelector";
import { useWorkoutPlanStatesSelector } from "../../Hooks/useWorkoutPlanStatesSelector";
import { findWorkout } from "../../Utils/CurrentWorkoutUtils/findWorkout";
import { AddExerciseToWorkoutModal } from "./AddExercise/AddExerciseToWorkoutModal";
import { DisplayWorkoutPlanHeader } from "./DisplayWorkout/DisplayWorkoutPlanHeader";
import { DisplayWorkoutTable } from "./DisplayWorkout/DisplayWorkoutTable";




export const DisplayCurrentWorkout: FC = () => {

    const workoutPlan = useWorkoutPlanSelector();
    const workoutPlanStates = useWorkoutPlanStatesSelector();
    const currentWorkout = findWorkout(workoutPlanStates.CurrentWorkoutId, workoutPlan);


    return (
        <>
            <DisplayWorkoutPlanHeader workoutPlanStates={workoutPlanStates} workoutPlan={workoutPlan} />

            {currentWorkout && (
                <>
                    <DisplayWorkoutTable currentWorkout={currentWorkout} workoutPlan={workoutPlan} />
                    <AddExerciseToWorkoutModal />

                </>
            )}
        </>)
}