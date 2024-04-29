import { configureStore } from '@reduxjs/toolkit';
import workoutPlanReducer from '../State/WorkoutPlan/workoutPlanSlice';
import workoutPlanStatesReducer from '../State/WorkoutPlan/workoutPlanStatesSlice';
import exerciseReducer from '../State/WorkoutPlan/exerciseSlice';
import workoutReducer from '../State/WorkoutPlan/workoutSlice';

export const store = configureStore({
    reducer: {
        workoutPlan: workoutPlanReducer,
        workoutPlanStates: workoutPlanStatesReducer,
        workout: workoutReducer,
        exercise: exerciseReducer,

    },
});

export type RootState = ReturnType<typeof store.getState>;

