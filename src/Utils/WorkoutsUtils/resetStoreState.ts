export const handleResetState = (dispatch: Function, resetState: Function, resetWorkoutPlanStates: Function) => {
    dispatch(resetWorkoutPlanStates());
    dispatch(resetState());
};