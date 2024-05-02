import { combineReducers, configureStore } from '@reduxjs/toolkit';
import workoutPlanReducer from '../State/WorkoutPlan/workoutPlanSlice';
import workoutPlanStatesReducer from '../State/WorkoutPlan/workoutPlanStatesSlice';



const rootReducer = combineReducers({
    workoutPlan: workoutPlanReducer,
    workoutPlanStates: workoutPlanStatesReducer,
});


const loadState = () => {
    try {
        const sessionState = sessionStorage.getItem('reduxState')
        if (sessionState === null) {
            return undefined;
        }
        return JSON.parse(sessionState);
    }
    catch (err) {
        return undefined;
    }
}

const saveState = (state: any) => {
    try {
        const sessionState = JSON.stringify(state);
        sessionStorage.setItem('reduxState', sessionState);
    }
    catch (err) {

    }
}

const preloadedState = loadState();





export const store = configureStore({
    reducer: rootReducer,
    preloadedState,
});

store.subscribe(() => {
    saveState(store.getState())
})

export type RootState = ReturnType<typeof store.getState>;

