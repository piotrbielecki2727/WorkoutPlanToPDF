import { WorkoutPlan, WorkoutPlanStatesTypes } from "../Types"
import { Box, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Text } from "@chakra-ui/react";

interface DisplayWorkoutPlanProps {
    workoutPlan: WorkoutPlan;
    workoutPlanStates: WorkoutPlanStatesTypes;
}


export const DisplayWorkoutPlan: React.FC<DisplayWorkoutPlanProps> = ({ workoutPlanStates, workoutPlan }) => {




    return (
        <>
            {workoutPlanStates.isWorkoutPlanCreated ? (
                <Card borderRadius={10} mt={5} mb={5} >
                    <CardHeader borderTopRadius={10} bg={'black'} color={'white'}>
                        <Heading textAlign='center' fontSize='17.5'>Training plan details</Heading>
                    </CardHeader>
                    <CardBody borderBottomRadius={10}>
                        <Stack divider={<StackDivider />} spacing='2'>
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


            ) : (<></>)
            }
        </>
    )
}