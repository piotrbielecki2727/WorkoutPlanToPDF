import { useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { CustomModal } from '../../CustomComponents/CustomModal'
import { handleCloseModal, handleOpenModal } from '../../../Utils/SideBarContentUtils/WorkoutPlanPageUtils'
import { Box } from '@chakra-ui/react'
import { ConfirmDeleting } from './ConfirmDeleting'



export const DeleteWorkoutPlanModal = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Box display='flex' justifyContent='center' alignItems='center'>
            <CustomModal
                ModalBodyContent={<ConfirmDeleting />}
                isOpen={isModalOpen}
                onOpenModal={() => handleOpenModal(setIsModalOpen)}
                onClose={() => handleCloseModal(setIsModalOpen)}
                HeaderText='Confirm workout plan deleting'
                leftIcon={FaTrash}
                buttonText='Delete plan'
            />
        </Box>

    )
}