import { Table, TableContainer, Thead, Tr, Th, Tbody, Td, IconButton, Flex, Card, CardHeader } from "@chakra-ui/react"
import './DisplayWorkouts.css';
import { FaEdit, FaTrash } from "react-icons/fa";
import { CardBody } from "react-bootstrap";
import { WorkoutPlan, WorkoutPlanStatesTypes } from "../../Types";
import { useDispatch } from "react-redux";
import { updateWorkoutPlanStates } from "../../State/WorkoutPlan/workoutPlanStatesSlice";



interface DisplayWorkoutsProps {
    workoutPlan: WorkoutPlan,
    workoutPlanStates: WorkoutPlanStatesTypes

}

export const DisplayWorkouts: React.FC<DisplayWorkoutsProps> = ({ workoutPlan, workoutPlanStates }) => {

    const dispatch = useDispatch();

    const setCurrentWorkoutId = (id: number) => {
        dispatch(updateWorkoutPlanStates({
            ...workoutPlanStates,
            CurrentWorkoutId: id
        }));
    }

    return (
        <>
            <Card maxW={230} mt={5}>
                <CardHeader p={3} textAlign='center' fontWeight='bold' fontSize={18} bg='black' color='white'  >
                    Workouts
                </CardHeader>
                <CardBody>
                    <TableContainer bg='white' w={230} maxHeight="220px" overflowY='auto' whiteSpace='wrap' textOverflow='ellipsis' >
                        <Table size='sm' variant='striped' >
                            <Thead textAlign='center' bg='black' border='1px solid white'>
                                <Tr>
                                    <Th textAlign='center' color='white'>Name</Th>
                                    <Th textAlign='center' color='white'>Action</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {workoutPlan.Workouts.map((workout) => (
                                    <Tr key={workout.Id}>
                                        <Td maxW={100} textAlign='center' whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">{workout.Name}</Td>
                                        <Td maxW={100} textAlign='center'>
                                            <Flex justifyContent='center' gap={1} alignItems='center'>
                                                <IconButton textAlign='center' size='sm' className="ActionButton" icon={<FaTrash size='20px' />} aria-label="xdd" />
                                                <IconButton onClick={() => setCurrentWorkoutId(workout.Id)} textAlign='center' size='sm' className="ActionButton" icon={<FaEdit size='20px' style={{ marginLeft: '4px' }} />} aria-label="xdd" />
                                            </Flex>
                                        </Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </CardBody>
            </Card>

        </>
    )
}

