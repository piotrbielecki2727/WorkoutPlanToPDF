import React from 'react'
import { Button, Icon, IconProps, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';

type Props = {
    className: string,
    onClick?: () => void,
    buttonText?: string
    size?: string;
    leftIcon?: IconType;
    variant?: string,
    mt?: number,

}



export const CustomButton: React.FC<Props> = ({ mt, className, onClick, buttonText, size, leftIcon, variant }) => {
    const LeftIcon = leftIcon;

    return (
        <>
            <Button mt={mt} colorScheme='none' variant={variant} className={className} onClick={onClick} size={size} leftIcon={leftIcon ? <Icon as={LeftIcon} /> : undefined}>
                <Text>{buttonText}</Text>
            </Button>
        </>
    )
}

