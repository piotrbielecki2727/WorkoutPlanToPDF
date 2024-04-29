import { Box, Flex, Text } from "@chakra-ui/react"
import { Workout, WorkoutPlan } from "../../Types"


interface Props {
    currentWorkout: Workout;
}

export const DisplayCurrentWorkoutHeader: React.FC<Props> = ({ currentWorkout }) => {
    return (
        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' h={20}  >
            <Flex justifyContent='center' alignItems='center'>
            <Text fontSize={25}>Workout name: {currentWorkout ? currentWorkout.Name : ""}</Text>
            </Flex>
        </Box>
    )
}