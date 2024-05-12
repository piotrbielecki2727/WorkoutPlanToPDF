import { deleteWorkout } from "../../State/WorkoutPlan/workoutPlanSlice"


export const deleteChoosedWorkout = (id: number, dispatch: Function) => {
    dispatch(deleteWorkout({ workoutId: id }))
}