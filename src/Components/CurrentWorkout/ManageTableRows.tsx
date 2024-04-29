import React, { useState } from 'react'
import { CustomButton } from '../CustomComponents/CustomButton'
import { FaPlus } from 'react-icons/fa'
import { CustomModal } from '../CustomComponents/CustomModal'
import { handleCloseModal, handleOpenModal } from '../../Utils/SideBarContentUtils/WorkoutPlanPageUtils'
import FormAddExerciseToWorkout from './AddExercise/FormAddExerciseToWorkout'

type Props = {}

export const ManageTableRows = (props: Props) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
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

        />
    )
}