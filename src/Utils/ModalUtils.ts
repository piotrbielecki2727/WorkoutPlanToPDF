type ModalOpenState = { [key: number]: boolean };


export const openModal = (workoutId: number, setModalOpenState: React.Dispatch<React.SetStateAction<ModalOpenState>>) => {
    setModalOpenState(prevState => ({
        ...prevState,
        [workoutId]: true
    }));
};

export const closeModal = (workoutId: number, setModalOpenState: React.Dispatch<React.SetStateAction<ModalOpenState>>) => {
    setModalOpenState(prevState => ({
        ...prevState,
        [workoutId]: false
    }));
};