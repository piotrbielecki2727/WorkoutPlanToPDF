import { WorkoutPlan } from "../Types"
import { useSelector } from "react-redux";
import { RootState } from "../State/store";
import { Box, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Text } from "@chakra-ui/react";
import { IoExit, IoMenu } from "react-icons/io5";
interface Props {
    isWorkoutPlanCreated: boolean,
}




export const DisplayWorkoutPlan: React.FC<Props> = ({ isWorkoutPlanCreated }) => {

    const workoutPlan: WorkoutPlan = useSelector((state: RootState) => state.workoutPlan.workoutPlan);


    return (
        <>
            {isWorkoutPlanCreated ? (
                <Box w={450} marginTop={5}>
                    <Card borderRadius={10} >
                        <CardHeader borderTopRadius={10} bg={'black'} color={'white'}>
                            <Heading textAlign='center' size='md'>Training plan details</Heading>
                        </CardHeader>
                        <CardBody borderBottomRadius={10}>
                            <Stack divider={<StackDivider />} spacing='3'>
                                <Box>
                                    <Heading textAlign='center' size='sm' >
                                        Name:
                                    </Heading>
                                    <Text align='center' pt='2' fontSize='sm'>
                                        {workoutPlan.Name}
                                    </Text>
                                </Box>
                                <Box>
                                    <Heading textAlign='center' size='sm' >
                                        Person:
                                    </Heading>
                                    <Text align='center' pt='2' fontSize='sm'>
                                        {workoutPlan.Person}
                                    </Text>
                                </Box>
                                <Box>
                                    <Heading textAlign='center' size='sm' >
                                        Author:
                                    </Heading>
                                    <Text align='center' pt='2' fontSize='sm'>
                                        {workoutPlan.Author}
                                    </Text>
                                </Box>
                            </Stack>
                        </CardBody>
                    </Card>
                </Box>
















            ) : (<></>)
            }
        </>
    )
}