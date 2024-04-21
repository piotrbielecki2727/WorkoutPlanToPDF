import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WorkoutPlan } from "../../Types";

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
        resetState: state => initialState
    },
})

export const { updateWorkoutPlan, resetState } = workoutPlanSlice.actions;
export default workoutPlanSlice.reducer;