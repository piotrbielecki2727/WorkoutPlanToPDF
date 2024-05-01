import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react"
import { Workout, WorkoutPlan, WorkoutPlanStatesTypes } from "../../../Types"


interface Props {
    workoutPlan: WorkoutPlan
    workoutPlanStates: WorkoutPlanStatesTypes
}

export const DisplayCurrentWorkoutHeader: React.FC<Props> = ({ workoutPlanStates, workoutPlan }) => {
    return (
        <SimpleGrid borderBottom='1px solid #363636' height='80px' bg='black' columns={3}>

            {workoutPlanStates.isWorkoutPlanCreated && (<>
                <Box height='80px' display='flex' justifyContent='center' alignItems='center'>
                    <Text color='white' fontWeight='bold' fontSize={18}>Workout plan: {workoutPlan.Name}</Text>
                </Box>
                <Box height='80px' display='flex' justifyContent='center' alignItems='center'>
                    <Text color='white' fontWeight='bold' fontSize={18}>Person: {workoutPlan.Person} </Text>
                </Box>
                <Box height='80px' display='flex' justifyContent='center' alignItems='center'>
                    <Text color='white' fontWeight='bold' fontSize={18}>Author: {workoutPlan.Author} </Text>
                </Box>
            </>)}

        </SimpleGrid>
    )
}

