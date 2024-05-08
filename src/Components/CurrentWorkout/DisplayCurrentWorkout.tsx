import { useWorkoutPlanSelector } from "../../Hooks/useWorkoutPlanSelector";
import { useWorkoutPlanStatesSelector } from "../../Hooks/useWorkoutPlanStatesSelector";
import { findWorkout } from "../../Utils/CurrentWorkoutUtils/findWorkout";
import { AddExerciseToWorkoutModal } from "./AddExercise/AddExerciseToWorkoutModal";
import { DisplayCurrentWorkoutHeader } from "./DisplayWorkout/DisplayCurrentWorkoutHeader";
import { DisplayWorkoutTable } from "./DisplayWorkout/DisplayWorkoutTable";




export const DisplayCurrentWorkout: React.FC = () => {

    const workoutPlan = useWorkoutPlanSelector();
    const workoutPlanStates = useWorkoutPlanStatesSelector();
    const currentWorkout = findWorkout(workoutPlanStates.CurrentWorkoutId, workoutPlan);


    return (
        <>
            <DisplayCurrentWorkoutHeader workoutPlanStates={workoutPlanStates} workoutPlan={workoutPlan} />

            {currentWorkout && (
                <>
                    <DisplayWorkoutTable currentWorkout={currentWorkout} workoutPlan={workoutPlan} />
                    <AddExerciseToWorkoutModal />

                </>
            )}
        </>)
}