import { Table, TableContainer, Thead, Tr, Th, Tbody, Card, CardHeader, Text } from "@chakra-ui/react"
import { CardBody } from "react-bootstrap";
import { WorkoutPlan, WorkoutPlanStatesTypes } from "../../Types";
import { useDispatch } from "react-redux";
import { updateWorkoutPlanStates } from "../../State/WorkoutPlan/workoutPlanStatesSlice";
import { FC, useEffect } from "react";
import './DisplayWorkouts.css';
import { displayCreatedWorkouts } from "../../Utils/SideBarContentUtils/displayCreatedWorkouts";


interface DisplayWorkoutsProps {
    workoutPlan: WorkoutPlan,
    workoutPlanStates: WorkoutPlanStatesTypes

}

export const DisplayWorkouts: FC<DisplayWorkoutsProps> = ({ workoutPlan, workoutPlanStates }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        if (workoutPlan.Workouts.length === 0) {
            dispatch(
                updateWorkoutPlanStates({
                    ...workoutPlanStates,
                    doWorkoutsExist: false,
                    CurrentWorkoutId: 0,
                })
            );
        }
    }, [workoutPlan.Workouts, dispatch, workoutPlanStates]);



    return (
        <>
            <Card border='1px solid #363636' borderRadius={0} maxW={250} mt={5}>
                <CardHeader p={3} borderBottom='1px solid #363636' textAlign='center' fontSize={18} bg='black' color='white'  >
                    <Text color='#0bff00'>Workouts</Text>
                </CardHeader>
                <CardBody>
                    <TableContainer bg='white' w={230} maxHeight="220px" overflowY='auto' whiteSpace='wrap' textOverflow='ellipsis' >
                        <Table size='sm' variant='striped' >
                            <Thead textAlign='center' bg='black' >
                                <Tr>
                                    <Th fontFamily='Righteous' borderRight='1px solid #363636' fontWeight='100' textAlign='center' color='white'>Name</Th>
                                    <Th fontFamily='Righteous' fontWeight='100' textAlign='center' color='white'>Action</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {displayCreatedWorkouts(workoutPlan, workoutPlanStates, dispatch)}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </CardBody>
            </Card>

        </>
    )
}

