export const handleCloseModal = (setIsModalOpen: Function, setIsWorkoutPlanCreated: Function) => {
    setIsModalOpen(false);
};

export const handleOpenModal = (setIsModalOpen: Function) => {
    setIsModalOpen(true);
};

export const handleResetState = (setIsWorkoutPlanCreated: Function, dispatch: Function, resetState: Function) => {
    setIsWorkoutPlanCreated(false);
    dispatch(resetState());
};