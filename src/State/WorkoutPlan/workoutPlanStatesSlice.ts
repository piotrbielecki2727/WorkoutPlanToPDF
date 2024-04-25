import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { WorkoutPlanStatesTypes } from "../../Types";



interface WorkoutPlanStates {
    workoutPlanStates: WorkoutPlanStatesTypes,
}

const initialState: WorkoutPlanStates = {
    workoutPlanStates: {
        isWorkoutPlanCreated: false,
        doWorkoutsExist: false,
        CurrentWorkoutId: 0,
    }
}


const workoutPlanStatesSlice = createSlice({
    name: "workoutPlanStates",
    initialState,
    reducers: {
        updateWorkoutPlanStates(state, action: PayloadAction<WorkoutPlanStatesTypes>) {
            state.workoutPlanStates = action.payload;
        },
        resetWorkoutPlanStates: state => initialState,
    }
})

export const { updateWorkoutPlanStates, resetWorkoutPlanStates } = workoutPlanStatesSlice.actions;
export default workoutPlanStatesSlice.reducer;