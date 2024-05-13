import { Table, TableContainer, Thead, Tr, Th, Tbody, Card, CardHeader, Text } from "@chakra-ui/react"
import { CardBody } from "react-bootstrap";
import { WorkoutPlan, WorkoutPlanStatesTypes } from "../../../Types";
import { useDispatch } from "react-redux";
import { updateWorkoutPlanStates } from "../../../State/WorkoutPlan/workoutPlanStatesSlice";
import { FC, useEffect } from "react";
import { DisplayCreatedWorkouts } from "./DisplayCreatedWorkouts";
import { checkIfWorkoutsExist } from "../../../Utils/WorkoutsUtils/checkIfWorkoutsExist";


interface DisplayWorkoutsProps {
    workoutPlan: WorkoutPlan,
    workoutPlanStates: WorkoutPlanStatesTypes
    dispatch: Function,

}

export const DisplayWorkouts: FC<DisplayWorkoutsProps> = ({ workoutPlan, workoutPlanStates, dispatch }) => {


    useEffect(() => {
        checkIfWorkoutsExist(workoutPlan, workoutPlanStates, dispatch, updateWorkoutPlanStates)
    }, [workoutPlan.Workouts]);



    return (
        <>
            <Card border='1px solid #363636' borderRadius={0} w='250px' mt={5}>
                <CardHeader p={3} borderBottom='1px solid #363636' textAlign='center' fontSize={18} bg='black' color='white'  >
                    <Text color='#0bff00'>Workouts</Text>
                </CardHeader>
                <CardBody>
                    <TableContainer bg='#d7f7e1' maxHeight="220px" overflowY='auto' whiteSpace='wrap' textOverflow='ellipsis' >
                        <Table colorScheme="green" size='sm' variant='striped'  >
                            <Thead textAlign='center' bg='black' >
                                <Tr >
                                    <Th fontFamily='Righteous' borderRight='1px solid #363636' fontWeight='100' textAlign='center' color='white'>Name</Th>
                                    <Th fontFamily='Righteous' fontWeight='100' textAlign='center' color='white'>Action</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <DisplayCreatedWorkouts workoutPlan={workoutPlan} workoutPlanStates={workoutPlanStates} dispatch={dispatch} />
                            </Tbody>
                        </Table>
                    </TableContainer>
                </CardBody>
            </Card>

        </>
    )
}

