import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Exercise, WorkoutPlan } from "../../Types";

interface ExerciseState {
    exercise: Exercise;
}

const initialState: ExerciseState = {
    exercise: {
        Id: 0,
        Name: '',
        Muscle: '',
        Sets: [],
    }
}


const exerciseSlice = createSlice({
    name: "exercise",
    initialState,
    reducers: {
        updateExercise(state, action: PayloadAction<Exercise>) {
            state.exercise = action.payload;
        },
    },
})

export const { updateExercise } = exerciseSlice.actions;
export default exerciseSlice.reducer;