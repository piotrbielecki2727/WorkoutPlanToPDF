import { Box, Card, CardBody, CardHeader, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { CustomButton } from "../../CustomComponents/CustomButton";
import { Workout, WorkoutPlan } from "../../../Types";
import { deleteChoosedExercise } from "../../../Utils/CurrentWorkoutUtils/deleteChoosedExercise";
import { useDispatch } from "react-redux";

interface Props {
    workoutPlan: WorkoutPlan;
    currentWorkout: Workout;
}


export const DisplayWorkoutTable: React.FC<Props> = ({ workoutPlan, currentWorkout }) => {
    const tableHeaders = ['Exercise no', 'Name', 'Primary muscle', 'Sets', 'Repetitions', 'Weight', 'Rest', 'Action'];
    const dispatch = useDispatch()




    return (
        <>
            <Card >
                <CardHeader borderBottom='1px solid #363636' borderRight='1px solid #363636' textAlign='center' p={3} fontSize={18} bg='black' color='white'  >
                    {currentWorkout.Name}
                </CardHeader>
                <CardBody p={0}>
                    <TableContainer  >
                        <Table variant='striped' size='sm' >
                            <Thead bg='black' borderBottom='1px solid black' borderTop='0px' >
                                {tableHeaders.map((tableHeader) => {
                                    return (
                                        <>
                                            <Th borderRight='1px solid #363636' fontFamily='Righteous' fontWeight='100' textAlign='center' bg='black' color='white'>{tableHeader}</Th>
                                            
                                        </>
                                    )
                                })}
                                <Tr>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {currentWorkout.Exercises.map((exercise, exerciseIndex) => {
                                    const tableDataCells = [exercise.Name, exercise.Muscle, exercise.Sets.Sets, exercise.Sets.Reps, exercise.Sets.Weight, exercise.Sets.Rest];
                                    return (
                                        <Tr key={`${exerciseIndex}`}>
                                            <Td textAlign='center'>{exerciseIndex + 1}</Td>
                                            {tableDataCells.map((tableDataCell) => {
                                                return <Td textAlign='center'>{tableDataCell}</Td>
                                            })}
                                            <Td textAlign='center'><CustomButton onClick={() => deleteChoosedExercise(dispatch, currentWorkout.Id, exercise.Name)} ml={2} p={1} bg="black" leftIcon={FaTrash} /></Td>
                                        </Tr>
                                    );
                                })}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </CardBody>
            </Card >
            <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'  >
            </Box>
        </>
    )
}
