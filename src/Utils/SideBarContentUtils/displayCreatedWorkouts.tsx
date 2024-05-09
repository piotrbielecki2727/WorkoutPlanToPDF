import { Flex, IconButton, Td, Tr } from "@chakra-ui/react"
import { FaEdit, FaTrash } from "react-icons/fa"
import { WorkoutPlan, WorkoutPlanStatesTypes } from "../../Types"
import { setCurrentWorkoutId } from "./setCurrentWorkoutId"
import { deleteChoosedWorkout } from "./deleteChoosedWorkout"



export const displayCreatedWorkouts = (workoutPlan: WorkoutPlan, workoutPlanStates: WorkoutPlanStatesTypes, dispatch: Function) => {
    
    return workoutPlan.Workouts.map((workout) => (
        
        <Tr key={workout.Id}>
            <Td maxW={100} borderRight='1px solid #363636 !important' borderBottom='1px solid #363636 !important' textAlign='center'>{workout.Name}</Td>
            <Td maxW={100} textAlign='center' borderBottom='1px solid #363636  !important'>
                <Flex justifyContent='center' gap={1} alignItems='center'>
                    <IconButton onClick={() => deleteChoosedWorkout(workout.Id, dispatch)} textAlign='center' className="ActionButton" size='sm' icon={<FaTrash size='20px' />} aria-label="2" />
                    <IconButton onClick={() => setCurrentWorkoutId(workout.Id, workoutPlanStates, dispatch)} textAlign='center' className="ActionButton" size='sm' icon={<FaEdit size='20px' style={{ marginLeft: '4px' }} />} aria-label="1" />
                </Flex>
            </Td>
        </Tr>
    ))

}