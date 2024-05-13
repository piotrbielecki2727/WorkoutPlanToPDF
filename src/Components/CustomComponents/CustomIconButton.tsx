import { IconButton, IconProps } from "@chakra-ui/react"
import { FC, ReactElement, ReactNode } from "react"



type Props = {
    icon: ReactElement,
    aria_label: string,
    onClick?: () => void;
    fontSize?: number,
}



export const CustomIconButton: FC<Props> = ({ fontSize, onClick, icon, aria_label }) => {
    return (
        <>
            <IconButton
                fontSize={fontSize}
                _hover={{ bg: 'rgba(255, 255, 255, 0.0)' }}
                onClick={onClick}
                bg='rgba(255, 255, 255, 0.0)'
                color='black'
                icon={icon}
                aria-label={aria_label} />
        </>
    )
}





