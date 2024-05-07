import { deleteExercise } from "../../State/WorkoutPlan/workoutPlanSlice";

export const deleteChoosedExercise = (dispatch: Function, workoutId: number, exerciseId: string) => {
    dispatch(deleteExercise({ exerciseId, workoutId }));
}