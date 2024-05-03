import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WorkoutPlan } from "../../Types";



interface DeleteWorkoutAction {
    workoutId: number;
}

interface DeleteExerciseAction {
    exerciseId: string;
    workoutId: number
}


interface WorkoutPlanState {
    workoutPlan: WorkoutPlan;
}

const initialState: WorkoutPlanState = {
    workoutPlan: {
        Name: '',
        Person: '',
        Author: '',
        Workouts: [],
    }
}


const workoutPlanSlice = createSlice({
    name: "workoutPlan",
    initialState,
    reducers: {
        updateWorkoutPlan(state, action: PayloadAction<WorkoutPlan>) {
            state.workoutPlan = action.payload;
        },
        resetState: state => initialState,
        deleteWorkout(state, action: PayloadAction<DeleteWorkoutAction>) {
            const { workoutId } = action.payload;
            state.workoutPlan.Workouts = state.workoutPlan.Workouts.filter(
                (workout) => workout.Id !== workoutId
            );
        },
        deleteExercise(state, action: PayloadAction<DeleteExerciseAction>) {
            const { exerciseId, workoutId } = action.payload;
            state.workoutPlan.Workouts.forEach((workout) => {
                if (workout.Id === workoutId) {
                    workout.Exercises = workout.Exercises.filter((exercise) => exercise.Name !== exerciseId)
                }
            })
        }

    },
})

export const { updateWorkoutPlan, resetState, deleteWorkout, deleteExercise } = workoutPlanSlice.actions;
export default workoutPlanSlice.reducer;