import { Table, TableContainer, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot, IconButton, Flex, Text, Card, CardHeader } from "@chakra-ui/react"
import { CustomButton } from "./CustomButton"
import './DisplayWorkouts.css';
import { FaEdit, FaTrash } from "react-icons/fa";
import { CardBody } from "react-bootstrap";
import { WorkoutPlan } from "../Types";
import { useSelector } from "react-redux";
import { RootState } from "../State/store";


interface DisplayWorkoutsProps {
    workoutPlan: WorkoutPlan,
}

export const DisplayWorkouts: React.FC<DisplayWorkoutsProps> = ({ workoutPlan }) => {



    return (
        <>
            <Card maxW={230} mt={5}>
                <CardHeader textAlign='center' fontWeight='bold' fontSize={18} bg='black' color='white'  >
                    Workouts
                </CardHeader>
                <CardBody>
                    <TableContainer bg='white' w={300} maxHeight="220px" overflowY='auto' whiteSpace='wrap' textOverflow='ellipsis' >
                        <Table size='sm' variant='striped' >
                            <Thead textAlign='center' bg='black' border='1px solid white'>
                                <Tr>
                                    <Th textAlign='center' color='white'>Name</Th>
                                    <Th textAlign='center' color='white'>Action</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {workoutPlan.Workouts.map((workout, index) => (
                                    <Tr key={index}>
                                        <Td maxW={100} textAlign='center' whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">{workout.Name}</Td>
                                        <Td maxW={100} textAlign='center'>
                                            <Flex justifyContent='center' gap={1} alignItems='center'>
                                                <IconButton textAlign='center' size='sm' className="ActionButton" icon={<FaTrash size='20px' />} aria-label="xdd" />
                                                <IconButton textAlign='center' size='sm' className="ActionButton" icon={<FaEdit size='20px' style={{ marginLeft: '4px' }} />} aria-label="xdd" />
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


