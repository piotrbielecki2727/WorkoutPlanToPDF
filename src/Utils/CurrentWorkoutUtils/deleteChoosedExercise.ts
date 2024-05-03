import { useDispatch } from "react-redux";
import { deleteExercise } from "../../State/WorkoutPlan/workoutPlanSlice";

export const deleteChoosedExercise = (dispatch: Function, workoutId: number, exerciseId: string) => {
    console.log("usuwam cwiczenie: " + exerciseId + " z treningu " + workoutId)
    dispatch(deleteExercise({ exerciseId, workoutId }));
}