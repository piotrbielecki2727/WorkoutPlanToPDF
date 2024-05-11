export const handleCloseModal = (setIsModalOpen: Function) => {
    console.log("zamykam")
    setIsModalOpen(false);
};

export const handleOpenModal = (setIsModalOpen: Function) => {
    console.log("otwirran")
    setIsModalOpen(true);
};

export const handleResetState = (dispatch: Function, resetState: Function, resetWorkoutPlanStates: Function) => {
    dispatch(resetWorkoutPlanStates());
    dispatch(resetState());
};