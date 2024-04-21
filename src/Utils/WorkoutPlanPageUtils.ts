export const handleCloseModal = (setIsModalOpen: Function, setIsWorkoutPlanCreated: Function) => {
    setIsModalOpen(false);
    setIsWorkoutPlanCreated(true);
};

export const handleOpenModal = (setIsModalOpen: Function) => {
    setIsModalOpen(true);
};

export const handleResetState = (setIsWorkoutPlanCreated: Function, dispatch: Function, resetState: Function) => {
    setIsWorkoutPlanCreated(false);
    dispatch(resetState());
};