import { Box, Card, CardBody, CardHeader, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { CustomButton } from "../../CustomComponents/CustomButton";
import { Workout, WorkoutPlan } from "../../../Types";
import { deleteChoosedExercise } from "../../../Utils/CurrentWorkoutUtils/deleteChoosedExercise";
import { useDispatch } from "react-redux";
import { displayWorkoutData } from "../../../Utils/CurrentWorkoutUtils/displayWorkoutData";
import { displayTableHeaders } from "../../../Utils/CurrentWorkoutUtils/displayTableHeaders";

interface Props {
    workoutPlan: WorkoutPlan;
    currentWorkout: Workout;
}


export const DisplayWorkoutTable: React.FC<Props> = ({ workoutPlan, currentWorkout }) => {


    return (
        <>
            <Card borderRadius={0}  >
                <CardHeader display='flex' justifyContent='center' flexDirection='row' alignItems='center' borderBottom='1px solid #363636' borderRight='1px solid #363636' gap={1} p={3} fontSize={18} bg='black' >
                    <Text color='#0bff00'>Workout name: </Text> <Text color='white'>{currentWorkout.Name} </Text>
                </CardHeader>
                <CardBody p={0}>
                    <TableContainer overflowY='auto' maxH={{ '2xl': '75vh', xl: '76.0vh' }}>
                        <Table variant='striped' size='sm' colorScheme="blackAlpha" >
                            <Thead bg='black' borderBottom='1px solid black' borderTop='0px' >
                                {displayTableHeaders()}
                                <Tr>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {displayWorkoutData(currentWorkout)}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </CardBody>
            </Card >
        </>
    )
}
