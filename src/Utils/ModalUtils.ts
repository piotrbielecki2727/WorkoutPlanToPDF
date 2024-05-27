type ModalOpenState = { [key: number]: boolean };


export const openModal = (id: number, setModalOpenState: React.Dispatch<React.SetStateAction<ModalOpenState>>) => {
    setModalOpenState(prevState => ({
        ...prevState,
        [id]: true
    }));
};

export const closeModal = (id: number, setModalOpenState: React.Dispatch<React.SetStateAction<ModalOpenState>>) => {
    setModalOpenState(prevState => ({
        ...prevState,
        [id]: false
    }));
};