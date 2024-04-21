import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from '@chakra-ui/react'
import { CustomButton } from './CustomButton'
import { FaCalendarPlus } from 'react-icons/fa'
import { ReactNode } from 'react'
import { IconType } from 'react-icons'

type Props = {
    ModalBodyContent?: ReactNode,
    onClose: () => void;
    onOpenModal: () => void;
    isOpen: boolean,
    HeaderText?: string,
    ModalStyle?: string,
    ModalHeaderStyle?: string,
    ModalBodyStyle?: string,
    leftIcon?: IconType,
}


export const CustomModal: React.FC<Props> = ({ onOpenModal, isOpen, onClose, ModalBodyContent, HeaderText, ModalStyle, ModalHeaderStyle, ModalBodyStyle, leftIcon }) => {

    return (
        <>
            <CustomButton onClick={onOpenModal} className='ButtonStyle' buttonText='Create workout plan' leftIcon={leftIcon} size='lg' />
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader className={ModalHeaderStyle}>{HeaderText}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody className={ModalBodyStyle}>
                        {ModalBodyContent}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}