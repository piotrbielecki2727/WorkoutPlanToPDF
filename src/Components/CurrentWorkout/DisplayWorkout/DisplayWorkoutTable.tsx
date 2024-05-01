import { Box, Card, CardBody, CardHeader, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { CustomButton } from "../../CustomComponents/CustomButton";
import { AddExerciseToWorkoutModal } from "../AddExercise/AddExerciseToWorkoutModal";
import { Workout, WorkoutPlan } from "../../../Types";
import { ReactNode } from "react";

interface Props {
    workoutPlan: WorkoutPlan;
    currentWorkout: Workout;
}


export const DisplayWorkoutTable: React.FC<Props> = ({ workoutPlan, currentWorkout }) => {
    const tableHeaders = ['Exercise no', 'Name', 'Primary muscle', 'Sets', 'Repetitions', 'Weight', 'Rest', 'Action'];


    return (
        <>
            <Card mx={5} mt={5}>
                <CardHeader borderBottom='1px solid #363636' textAlign='center' fontWeight='bold' fontSize={18} bg='black' color='white'  >
                    {currentWorkout.Name}
                </CardHeader>
                <CardBody p={0}>
                    <TableContainer>
                        <Table variant='striped' >
                            <Thead bg='black' >
                                {tableHeaders.map((tableHeader) => {
                                    return <Th textAlign='center' bg='black' color='white'>{tableHeader}</Th>
                                })}
                                <Tr>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {workoutPlan.Workouts.map((workout, workoutIndex) => (
                                    workout.Exercises.map((exercise, exerciseIndex) => (
                                        <Tr key={`{${workoutIndex}-${exerciseIndex}`}>
                                            <Td textAlign='center'>{exerciseIndex + 1}</Td>
                                            <Td textAlign='center'>{exercise.Name}</Td>
                                            <Td textAlign='center'>{exercise.Muscle}</Td>
                                            <Td textAlign='center'>{exercise.Sets.Sets}</Td>
                                            <Td textAlign='center'>{exercise.Sets.Reps}</Td>
                                            <Td textAlign='center'>{exercise.Sets.Weight}</Td>
                                            <Td textAlign='center'>{exercise.Sets.Rest}</Td>
                                            <Td textAlign='center'><CustomButton buttonText="delete" bg="black" leftIcon={FaTrash} /></Td>
                                        </Tr>
                                    )
                                    )))}

                            </Tbody>
                        </Table>
                    </TableContainer>
                </CardBody>
            </Card>
            <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'  >
            </Box>
        </>
    )
}
