import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Workout } from "../../Types";

interface WorkoutState {
    workout: Workout;
}

const initialState: WorkoutState = {
    workout: {
        Id: 0,
        Name: '',
        Exercises: [],
    }
}


const workoutSlice = createSlice({
    name: "workout",
    initialState,
    reducers: {
        updateWorkout(state, action: PayloadAction<Workout>) {
            state.workout = action.payload;
        },
        resetState: state => initialState,
    },
})

export const { updateWorkout, resetState } = workoutSlice.actions;
export default workoutSlice.reducer;