import { Box, SimpleGrid, Text } from "@chakra-ui/react"
import { WorkoutPlan, WorkoutPlanStatesTypes } from "../../../Types"
import { CustomButton } from "../../CustomComponents/CustomButton"
import { FaFileDownload, FaFilePdf, FaTrash } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { FC, ReactNode } from "react"
import { DeleteWorkoutPlanModal } from "../DeleteWorkoutPlan/DeleteWorkoutPlanModal"
import { resetState } from "../../../State/WorkoutPlan/workoutPlanSlice"
import { handleResetState } from "../../../Utils/WorkoutsUtils/resetStoreState"
import { resetWorkoutPlanStates } from "../../../State/WorkoutPlan/workoutPlanStatesSlice"


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
            <Box height='80px' wordBreak='break-word' display='flex' justifyContent='center' borderRight='1px solid #363636' borderBottom={{ base: '1px solid #363636' }} >
                {content}
            </Box>
        );
    }

    const headerAndText = (header: string, text: string) => {
        return (
            <>
                <Text textAlign='center' color='#0bff00' fontSize={{ base: 13, sm: 16 }}>{header}</Text>
                <Text textAlign='center' color='white' fontSize={{ base: 13, sm: 15 }}>{text}</Text>
            </>
        );
    }

    const buttonHeader = (button: ReactNode) => {
        return (
            <Box display='flex' alignItems='center'>
                {button}
            </Box>
        );
    }

    return (
        <SimpleGrid bg='black' columns={{ base: 3, xl: 6 }}>
            {HeaderBox(customGrid(headerAndText("Workout plan:", workoutPlan.Name)))}
            {HeaderBox(customGrid(headerAndText("Person:", workoutPlan.Person)))}
            {HeaderBox(customGrid(headerAndText("Author:", workoutPlan.Author)))}
            {HeaderBox(buttonHeader(<CustomButton maxW={{ base: '130px', small: null }} leftIcon={FaFilePdf} buttonText='Generate PDF' />))}
            {HeaderBox(buttonHeader(<CustomButton maxW={{ base: '130px', small: null }} leftIcon={FaFileDownload} buttonText='Download plan'></CustomButton>))}
            {workoutPlanStates.doWorkoutsExist ?
                HeaderBox(buttonHeader(<DeleteWorkoutPlanModal />))
                :
                HeaderBox(buttonHeader(<CustomButton maxW={{ base: '130px', small: null }} leftIcon={FaTrash} buttonText="Delete plan" onClick={() => handleResetState(dispatch, resetState, resetWorkoutPlanStates)} />))
            }

        </SimpleGrid>
    );
}