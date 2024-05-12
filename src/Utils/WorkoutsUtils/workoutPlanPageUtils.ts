export const handleCloseModal = (setIsModalOpen: Function) => {
    setIsModalOpen(false);
};

export const handleOpenModal = (setIsModalOpen: Function) => {
    setIsModalOpen(true);
};

export const handleResetState = (dispatch: Function, resetState: Function, resetWorkoutPlanStates: Function) => {
    dispatch(resetWorkoutPlanStates());
    dispatch(resetState());
};