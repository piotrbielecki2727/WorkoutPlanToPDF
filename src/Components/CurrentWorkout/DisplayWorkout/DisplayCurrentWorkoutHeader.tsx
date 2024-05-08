import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react"
import { Workout, WorkoutPlan, WorkoutPlanStatesTypes } from "../../../Types"
import { CustomButton } from "../../CustomComponents/CustomButton"
import { FaDownload, FaTrash } from "react-icons/fa"
import { handleResetState } from "../../../Utils/SideBarContentUtils/WorkoutPlanPageUtils"
import { resetWorkoutPlanStates } from "../../../State/WorkoutPlan/workoutPlanStatesSlice"
import { resetState } from "../../../State/WorkoutPlan/workoutPlanSlice"
import { useDispatch } from "react-redux"
import React, { ReactNode } from "react"


interface Props {
    workoutPlan: WorkoutPlan
    workoutPlanStates: WorkoutPlanStatesTypes
}

export const DisplayCurrentWorkoutHeader: React.FC<Props> = ({ workoutPlanStates, workoutPlan }) => {

    const dispatch = useDispatch();

    const customGrid = (children: ReactNode) => {
        return <SimpleGrid display='flex' justifyContent='center' alignItems='center' flexDirection='column'>{children}</SimpleGrid>;
    }

    const HeaderBox = (content: ReactNode, display: any) => {
        return (
            <Box height='80px' display={display} justifyContent='center' alignItems='center' borderRight='1px solid #363636' borderBottom={{ base: '1px solid #363636' }} >
                {content}
            </Box>
        );
    }

    const headerAndText = (header: string, text: string) => {
        return (
            <>
                <Text color='#0bff00' fontSize={{ base: 13, md: 16 }}>{header}</Text>
                <Text color='white' fontSize={{ base: 13, md: 16 }}>{text}</Text>
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
        <SimpleGrid bg='black' columns={{ base: 3, lg: 5 }}>
            {HeaderBox(customGrid(headerAndText("Workout plan:", workoutPlan.Name)), 'flex')}
            {HeaderBox(customGrid(headerAndText("Person:", workoutPlan.Person)), 'flex')}
            {HeaderBox(customGrid(headerAndText("Author:", workoutPlan.Author)), 'flex')}
            {HeaderBox(buttonHeader(<CustomButton leftIcon={FaDownload} maxW={{ base: 120, lg: 150 }} fontSize={{ base: 13, md: 16 }} className="ButtonStyle" buttonText='Generate PDF' />), 'flex')}
            {HeaderBox(buttonHeader(<button />), { lg: 'none' })}
            {HeaderBox(buttonHeader(<CustomButton leftIcon={FaTrash} maxW={{ base: 120, lg: 150 }} fontSize={{ base: 13, md: 16 }} buttonText='Delete plan' className="ButtonStyle" onClick={() => handleResetState(dispatch, resetState, resetWorkoutPlanStates)}></CustomButton>), 'flex')}

        </SimpleGrid>
    );
}