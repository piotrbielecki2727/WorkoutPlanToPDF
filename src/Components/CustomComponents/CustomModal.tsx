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
import React from 'react'

type Props = {
    isOpen: boolean;
    onClose: () => void;
    HeaderText?: string;
    ModalBodyContent?: ReactNode;
    size?: string;
    maxModalW?: any;
    border?: string;
    h?: string;
    buttonType: React.ReactElement<typeof CustomButton>;
};


export const CustomModal: FC<Props> = ({ buttonType, maxModalW, border, h, size, isOpen, onClose, ModalBodyContent, HeaderText}) => {

    return (
        <>
            {buttonType}
            <Modal closeOnOverlayClick={false} isCentered size={size} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay bg='rgba(11, 255, 0,0.1)' backdropFilter='blur(10px) hue-rotate(30deg)' />
                <ModalContent maxW={maxModalW} border={border}  color='white' borderRadius={10} h={h}>
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