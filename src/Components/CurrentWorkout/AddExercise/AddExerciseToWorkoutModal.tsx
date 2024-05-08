import React, { useState } from 'react'
import { CustomButton } from '../../CustomComponents/CustomButton'
import { FaPlus } from 'react-icons/fa'
import { CustomModal } from '../../CustomComponents/CustomModal'
import { handleCloseModal, handleOpenModal } from '../../../Utils/SideBarContentUtils/WorkoutPlanPageUtils'
import FormAddExerciseToWorkout from './FormAddExerciseToWorkout'
import { Box } from '@chakra-ui/react'



export const AddExerciseToWorkoutModal = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Box display='flex' justifyContent='center' alignItems='center'>
            <CustomModal
                mt={5}
                ModalBodyContent={<FormAddExerciseToWorkout onCloseModal={() => handleCloseModal(setIsModalOpen)} />}
                isOpen={isModalOpen}
                onOpenModal={() => handleOpenModal(setIsModalOpen)}
                onClose={() => handleCloseModal(setIsModalOpen)}
                HeaderText='Enter exercise details'
                leftIcon={FaPlus}
                buttonText='Add new exercise'
                size='2xl'
                fontSize={16}
                borderRadiusHeader='10px 10px 0px 0px'
                borderRadius={10}
            />
        </Box>

    )
}