import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import { Button, Icon, Text } from '@chakra-ui/react';
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
    px?: number,
    py?: number,

}



export const CustomButton: FC<Props> = ({ py, px, type, fontSize, mb, ml, w, maxW, mt, bg, color, p, className, onClick, buttonText, size, leftIcon, variant }) => {
    const LeftIcon = leftIcon;

    return (
        <>
            <Button py={{ base: 3, md: 6 }} type={type} px={px} fontSize={{ base: 13, md: 16 }} mb={mb} w={w} maxW={maxW} mt={mt} bg={bg} color={color} p={p} colorScheme='none' variant={variant} className='ButtonStyle' onClick={onClick} size={size} leftIcon={leftIcon ? <Icon ml={ml} color='#0bff00' as={LeftIcon} /> : undefined}>
                <Text>{buttonText}</Text>
            </Button>
        </>
    )
}

