import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { CustomModal } from '../../CustomComponents/CustomModal'
import { handleCloseModal, handleOpenModal } from '../../../Utils/SideBarContentUtils/WorkoutPlanPageUtils'
import FormAddExerciseToWorkout from './FormAddExerciseToWorkout'
import { Box } from '@chakra-ui/react'
import { CustomButton } from '../../CustomComponents/CustomButton'



export const AddExerciseToWorkoutModal = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Box display='flex' justifyContent='center' alignItems='center'>
            <CustomModal
                mt={5}
                ModalBodyContent={<FormAddExerciseToWorkout onCloseModal={() => handleCloseModal(setIsModalOpen)} />}
                isOpen={isModalOpen}
                onClose={() => handleCloseModal(setIsModalOpen)}
                HeaderText='Enter exercise details'
                borderRadiusHeader='10px 10px 0px 0px'
                buttonType={<CustomButton buttonText='Add new exercise' leftIcon={FaPlus} onClick={() => handleOpenModal(setIsModalOpen)} />}

            />
        </Box>

    )
}