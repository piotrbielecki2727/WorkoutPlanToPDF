import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import { Button, ButtonProps, Icon, IconProps, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';

type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    className?: string,
    onClick?: () => void,
    buttonText?: string
    size?: string;
    leftIcon?: IconType;
    variant?: string,
    mt?: number,
    color?: string,
    bg?: string,
    p?: number
    maxW?: number | any,
    w?: number | any,
    mb?: number,
    ml?: number,
    fontSize?: number | any,

}



export const CustomButton: React.FC<Props> = ({ type, fontSize, mb, ml, w, maxW, mt, bg, color, p, className, onClick, buttonText, size, leftIcon, variant }) => {
    const LeftIcon = leftIcon;

    return (
        <>
            <Button type={type} fontSize={fontSize} mb={mb} w={w} maxW={maxW} mt={mt} bg={bg} color={color} p={p} colorScheme='none' variant={variant} className={className} onClick={onClick} size={size} leftIcon={leftIcon ? <Icon ml={ml} color='#0bff00' as={LeftIcon} /> : undefined}>
                <Text>{buttonText}</Text>
            </Button>
        </>
    )
}

