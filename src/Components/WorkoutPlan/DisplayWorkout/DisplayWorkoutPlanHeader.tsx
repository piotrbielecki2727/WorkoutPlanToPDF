import { Box, SimpleGrid, Text } from "@chakra-ui/react"
import { Workout, WorkoutPlan, WorkoutPlanStatesTypes } from "../../../Types"
import { CustomButton } from "../../CustomComponents/CustomButton"
import { FaFileDownload, FaFilePdf } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { FC, ReactNode } from "react"
import { DeleteWorkoutPlanModal } from "../DeleteWorkoutPlan/DeleteWorkoutPlanModal"


interface Props {
    workoutPlan: WorkoutPlan
    workoutPlanStates: WorkoutPlanStatesTypes
}

export const DisplayWorkoutPlanHeader: FC<Props> = ({ workoutPlanStates, workoutPlan }) => {

    const dispatch = useDispatch();

    const customGrid = (children: ReactNode) => {
        return <SimpleGrid display='flex' justifyContent='center' alignItems='center' flexDirection='column'>{children}</SimpleGrid>;
    }

    const HeaderBox = (content: ReactNode) => {
        return (
            <Box height='80px' display='flex' justifyContent='center' alignItems='center' borderRight='1px solid #363636' borderBottom={{ base: '1px solid #363636' }} >
                {content}
            </Box>
        );
    }

    const headerAndText = (header: string, text: string) => {
        return (
            <>
                <Text color='#0bff00' fontSize={{ base: 13, sm: 16 }}>{header}</Text>
                <Text color='white' fontSize={{ base: 13, sm: 16 }}>{text}</Text>
            </>
        );
    }

    const buttonHeader = (button: ReactNode) => {
        return (
            <Box>
                {button}
            </Box>
        );
    }

    return (
        <SimpleGrid bg='black' columns={{ base: 3, xl: 6 }}>
            {HeaderBox(customGrid(headerAndText("Workout plan:", workoutPlan.Name)))}
            {HeaderBox(customGrid(headerAndText("Person:", workoutPlan.Person)))}
            {HeaderBox(customGrid(headerAndText("Author:", workoutPlan.Author)))}
            {HeaderBox(buttonHeader(<CustomButton leftIcon={FaFilePdf} p={3} maxW={{ base: 120, sm: 150, xl: 180 }} fontSize={{ base: 13, sm: 16 }}  buttonText='Generate PDF' />))}
            {HeaderBox(buttonHeader(<CustomButton leftIcon={FaFileDownload} p={3} maxW={{ base: 120, sm: 150, xl: 180 }} fontSize={{ base: 13, sm: 16 }} buttonText='Download plan'></CustomButton>))}
            {HeaderBox(buttonHeader(<DeleteWorkoutPlanModal />))}
        </SimpleGrid>
    );
}