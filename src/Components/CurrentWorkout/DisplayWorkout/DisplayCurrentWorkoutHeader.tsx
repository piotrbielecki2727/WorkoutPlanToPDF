import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react"
import { Workout, WorkoutPlan, WorkoutPlanStatesTypes } from "../../../Types"
import { CustomButton } from "../../CustomComponents/CustomButton"
import { FaDownload, FaTrash } from "react-icons/fa"
import { handleResetState } from "../../../Utils/SideBarContentUtils/WorkoutPlanPageUtils"
import { resetWorkoutPlanStates } from "../../../State/WorkoutPlan/workoutPlanStatesSlice"
import { resetState } from "../../../State/WorkoutPlan/workoutPlanSlice"
import { useDispatch } from "react-redux"


interface Props {
    workoutPlan: WorkoutPlan
    workoutPlanStates: WorkoutPlanStatesTypes
}

export const DisplayCurrentWorkoutHeader: React.FC<Props> = ({ workoutPlanStates, workoutPlan }) => {

    const dispatch = useDispatch();

    return (
        <SimpleGrid borderBottom='1px solid #363636' height='80px' bg='black' columns={5}>

            {workoutPlanStates.isWorkoutPlanCreated && (<>
                <Box height='80px' display='flex' justifyContent='center' alignItems='center' borderRight='1px solid #363636'>
                    <SimpleGrid display='flex' justifyContent='center' alignItems='center' flexDirection='column' columns={1}>
                        <Text color='#0bff00' fontSize={16}>Workout plan:</Text>
                        <Text color='white' fontSize={16}>{workoutPlan.Name}</Text>
                    </SimpleGrid>
                </Box>
                <Box height='80px' display='flex' justifyContent='center' alignItems='center' borderRight='1px solid #363636'>
                    <SimpleGrid display='flex' justifyContent='center' alignItems='center' flexDirection='column' columns={1}>
                        <Text color='#0bff00' fontSize={16}>Person:</Text>
                        <Text color='white' fontSize={16}>{workoutPlan.Person}:</Text>
                    </SimpleGrid>
                </Box>
                <Box height='80px' display='flex' justifyContent='center' alignItems='center' borderRight='1px solid #363636'>
                    <SimpleGrid display='flex' justifyContent='center' alignItems='center' flexDirection='column' columns={1}>
                        <Text color='#0bff00'  fontSize={16}>Author:</Text>
                        <Text color='white'  fontSize={16}>{workoutPlan.Author} </Text>

                    </SimpleGrid>
                </Box>
                <Box height='80px' display='flex' justifyContent='center' alignItems='center' borderRight='1px solid #363636'>
                    <CustomButton leftIcon={FaDownload} w={250} className="ButtonStyle" buttonText='Generate PDF' />
                </Box>
                <Box height='80px' display='flex' justifyContent='center'  alignItems='center' borderRight='1px solid #363636'>
                    <CustomButton  leftIcon={FaTrash} w={250} buttonText='Delete plan' className="ButtonStyle" onClick={() => handleResetState(dispatch, resetState, resetWorkoutPlanStates)}></CustomButton>
                </Box>
            </>)}

        </SimpleGrid>
    )
}

