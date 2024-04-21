import React from 'react'
import { Button, Icon, IconProps } from '@chakra-ui/react';
import { IconType } from 'react-icons';

type Props = {
    className: string,
    onClick?: () => void,
    buttonText?: string
    size?: string;
    leftIcon?: IconType;
    variant?: string,

}



export const CustomButton: React.FC<Props> = ({ className, onClick, buttonText, size, leftIcon, variant }) => {
    const LeftIcon = leftIcon;

    return (
        <>
            <Button colorScheme='none' variant={variant} className={className} onClick={onClick} size={size} leftIcon={leftIcon ? <Icon as={LeftIcon} /> : undefined}>
                {buttonText}
            </Button>
        </>
    )
}

