import { Card, CardBody, CardHeader, Flex, Table, TableContainer, Tbody, Text, Thead, Tr } from "@chakra-ui/react";
import { Workout, WorkoutPlan } from "../../../Types";
import { DisplayWorkoutData } from "./DisplayWorkoutData";
import { DisplayTableHeaders } from "./DisplayTableHeaders";
import { FC } from "react";

interface Props {
    workoutPlan: WorkoutPlan;
    currentWorkout: Workout;
    dispatch: Function,
}


export const DisplayWorkoutTable: FC<Props> = ({ workoutPlan, currentWorkout, dispatch }) => {


    return (
        <>
            <Card borderRadius={0}  >
                <CardHeader display='flex' justifyContent='center' flexDirection='row' alignItems='center' borderBottom='1px solid #363636' borderRight='1px solid #363636' gap={1} p={3} fontSize={18} bg='black' >
                    <Text color='#0bff00'>Workout name: </Text> <Text color='white'>{currentWorkout.Name} </Text>
                </CardHeader>
                <CardBody p={0}>
                    <Flex flexDirection='column'>
                        <TableContainer overflowY='auto' >
                            <Table variant='striped' size='sm' colorScheme="blackAlpha" >
                                <Thead bg='black' borderBottom='1px solid black' borderTop='0px' >
                                <Tr>
                                    <DisplayTableHeaders />
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <DisplayWorkoutData currentWorkout={currentWorkout} dispatch={dispatch} />
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </Flex>
                </CardBody>
            </Card >
        </>
    )
}
