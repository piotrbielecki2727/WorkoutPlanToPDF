import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
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
    mt?: number,
    buttonText?: string,
    size?: string,
    w?: number,
    maxW?: number,
    mb?: number,
    h?: string,
    borderRadius?: number
    borderRadiusHeader?: string,
    fontSize?: number,
    bg?: string,
    backdropFilter?: string,
    maxH?: string,
    px?: number,
    border?: string,
}


export const CustomModal: React.FC<Props> = ({border, px, maxH, bg, backdropFilter, fontSize, borderRadius, borderRadiusHeader, h, w, mb, maxW, size, mt, buttonText, onOpenModal, isOpen, onClose, ModalBodyContent, HeaderText, ModalStyle, ModalHeaderStyle, ModalBodyStyle, leftIcon }) => {

    return (
        <>
            <CustomButton px={px} fontSize={fontSize} mb={mb} maxW={maxW} w={w} mt={mt} onClick={onOpenModal} className='ButtonStyle' buttonText={buttonText} leftIcon={leftIcon} size='lg' />
            <Modal closeOnOverlayClick={false} isCentered size={size} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay bg={bg} backdropFilter={backdropFilter} />
                <ModalContent border={border} maxH={maxH} color='white' borderRadius={borderRadius} h={h}>
                    <ModalHeader fontWeight={100} borderRadius={borderRadiusHeader} color='white' bg='black'>
                        {HeaderText}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody color='black'>
                        {ModalBodyContent}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}