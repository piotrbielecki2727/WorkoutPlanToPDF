import { FC } from "react";
import { useWorkoutPlanSelector } from "../../Hooks/useWorkoutPlanSelector";
import { useWorkoutPlanStatesSelector } from "../../Hooks/useWorkoutPlanStatesSelector";
import { findWorkout } from "../../Utils/CurrentWorkoutUtils/findWorkout";
import { AddExerciseToWorkoutModal } from "./AddExercise/AddExerciseToWorkoutModal";
import { DisplayWorkoutPlanHeader } from "./DisplayCurrentWorkout/DisplayWorkoutPlanHeader";
import { DisplayWorkoutTable } from "./DisplayCurrentWorkout/DisplayWorkoutTable";
import { useDispatch } from "react-redux";
import { PDFDocument } from "../PDFGenerating/PDFDocument";




export const DisplayCurrentWorkout: FC = () => {

    const workoutPlan = useWorkoutPlanSelector();
    const workoutPlanStates = useWorkoutPlanStatesSelector();
    const currentWorkout = findWorkout(workoutPlanStates.CurrentWorkoutId, workoutPlan);
    const dispatch = useDispatch()


    return (
        <>
            <DisplayWorkoutPlanHeader workoutPlanStates={workoutPlanStates} workoutPlan={workoutPlan} />

            {currentWorkout && (
                <>
                    <DisplayWorkoutTable currentWorkout={currentWorkout} workoutPlan={workoutPlan} dispatch={dispatch} />
                    <AddExerciseToWorkoutModal />
                    <PDFDocument />

                </>
            )}
        </>)
}