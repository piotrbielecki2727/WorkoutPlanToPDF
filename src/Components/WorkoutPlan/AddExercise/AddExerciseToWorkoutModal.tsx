import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { CustomModal } from '../../CustomComponents/CustomModal'
import { handleCloseModal, handleOpenModal } from '../../../Utils/WorkoutsUtils/handleCloseAndOpenModal'
import FormAddExerciseToWorkout from './FormAddExerciseToWorkout'
import { Box } from '@chakra-ui/react'
import { CustomButton } from '../../CustomComponents/CustomButton'



export const AddExerciseToWorkoutModal = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Box display='flex' justifyContent='center' alignItems='center'>
            <CustomModal
                ModalBodyContent={<FormAddExerciseToWorkout onCloseModal={() => handleCloseModal(setIsModalOpen)} />}
                isOpen={isModalOpen}
                onClose={() => handleCloseModal(setIsModalOpen)}
                HeaderText='Enter exercise details'
                buttonType={<CustomButton mt={5} buttonText='Add new exercise' leftIcon={FaPlus} onClick={() => handleOpenModal(setIsModalOpen)} />}

            />
        </Box>

    )
}