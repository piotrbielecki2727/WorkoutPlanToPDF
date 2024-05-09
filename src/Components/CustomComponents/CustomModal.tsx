import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { CustomButton } from './CustomButton'
import { FC, ReactNode } from 'react'
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
    maxW?: any,
    mb?: number,
    h?: string,
    borderRadius?: number
    borderRadiusHeader?: string,
    fontSize?: any,
    bg?: string,
    backdropFilter?: string,
    maxH?: string,
    px?: number,
    border?: string,
    p?: number,
    maxModalW?: any,

}


export const CustomModal: FC<Props> = ({ maxModalW, p, border, px, maxH, bg, backdropFilter, fontSize, borderRadius, borderRadiusHeader, h, w, mb, maxW, size, mt, buttonText, onOpenModal, isOpen, onClose, ModalBodyContent, HeaderText, ModalStyle, ModalHeaderStyle, ModalBodyStyle, leftIcon }) => {

    return (
        <>
            <CustomButton p={p} px={px} mb={mb} maxW={maxW} mt={mt} onClick={onOpenModal} className='ButtonStyle' buttonText={buttonText} leftIcon={leftIcon} />
            <Modal closeOnOverlayClick={false} isCentered size={size} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay bg='rgba(11, 255, 0,0.1)' backdropFilter='blur(10px) hue-rotate(30deg)' />
                <ModalContent maxW={maxModalW} border={border} maxH='100%' color='white' borderRadius={10} h={h}>
                    <ModalHeader fontWeight={100} borderRadius='10px 10px 0px 0px' color='white' bg='black'>
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