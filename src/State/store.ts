import { configureStore } from '@reduxjs/toolkit';
import workoutPlanReducer from '../State/WorkoutPlan/workoutPlanSlice';

export const store = configureStore({
    reducer: {
        workoutPlan: workoutPlanReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>; 

