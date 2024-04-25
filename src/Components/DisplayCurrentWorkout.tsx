import { useSelector } from "react-redux";
import { WorkoutPlan, WorkoutPlanStatesTypes } from "../Types";
import { RootState } from "../State/store";
import { Box, Flex, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import './DisplayCurrentWorkouts.css'


export const DisplayCurrentWorkout: React.FC = () => {

    const workoutPlan: WorkoutPlan = useSelector((state: RootState) => state.workoutPlan.workoutPlan);
    const workoutPlanStates: WorkoutPlanStatesTypes = useSelector((state: RootState) => state.workoutPlanStates.workoutPlanStates);

    const findWorkout = () => {
        if (workoutPlanStates.CurrentWorkoutId !== 0) {
            const currentWorkout = workoutPlan.Workouts.find(workout => workout.Id === workoutPlanStates.CurrentWorkoutId)
            if (currentWorkout) {
                return currentWorkout;
            }
        }
        return null;
    }

    const currentWorkout = findWorkout();




    return (<>
        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' h={20}  >
            <Flex justifyContent='center' alignItems='center'>
                <Text fontSize={25}>Workout name: {currentWorkout?.Name}</Text>
            </Flex>
        </Box>

        <Box px={5}>
            <TableContainer>
                <Table variant='striped' >
                    <Thead bg='black' >
                        <Tr>
                            <Th color='white' textAlign='center'>Exercise no.</Th>

                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td textAlign='center'>1</Td>

                        </Tr>



                    </Tbody>

                </Table>
            </TableContainer>
        </Box>
    </>)
}