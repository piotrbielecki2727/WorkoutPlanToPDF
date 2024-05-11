import { IconButton, IconProps } from "@chakra-ui/react"
import { FC, ReactElement, ReactNode } from "react"



type Props = {
    icon: ReactElement,
    aria_label: string,
    onClick: () => void;
}



export const CustomIconButton: FC<Props> = ({ onClick, icon, aria_label }) => {
    return (
        <>
            <IconButton
                _hover={{ bg: 'rgba(255, 255, 255, 0.0)' }}
                onClick={onClick}
                bg='rgba(255, 255, 255, 0.0)'
                color='black'
                icon={icon}
                aria-label={aria_label} />
        </>
    )
}





