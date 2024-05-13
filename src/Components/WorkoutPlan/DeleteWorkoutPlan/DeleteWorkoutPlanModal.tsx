import { useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { CustomModal } from '../../CustomComponents/CustomModal'
import { handleCloseModal, handleOpenModal } from '../../../Utils/WorkoutsUtils/handleCloseAndOpenModal'
import { Box } from '@chakra-ui/react'
import { ConfirmDeleting } from './ConfirmDeleting'
import { CustomButton } from '../../CustomComponents/CustomButton'



export const DeleteWorkoutPlanModal = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Box display='flex' justifyContent='center' alignItems='center'>
            <CustomModal
                ModalBodyContent={<ConfirmDeleting />}
                isOpen={isModalOpen}
                onClose={() => handleCloseModal(setIsModalOpen)}
                HeaderText='Confirm workout plan deleting'
                buttonType={<CustomButton buttonText='Delete plan' onClick={() => handleOpenModal(setIsModalOpen)} leftIcon={FaTrash} />}
            />
        </Box>

    )
}