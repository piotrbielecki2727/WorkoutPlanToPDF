import { configureStore } from '@reduxjs/toolkit';
import workoutPlanReducer from '../State/WorkoutPlan/workoutPlanSlice';
import workoutPlanStatesReducer from '../State/WorkoutPlan/workoutPlanStatesSlice';

export const store = configureStore({
    reducer: {
        workoutPlan: workoutPlanReducer,
        workoutPlanStates: workoutPlanStatesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

