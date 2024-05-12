import { Box, Text } from '@chakra-ui/react'
import { FaTrash } from 'react-icons/fa'
import { resetState } from '../../../State/WorkoutPlan/workoutPlanSlice'
import { resetWorkoutPlanStates } from '../../../State/WorkoutPlan/workoutPlanStatesSlice'
import { handleResetState } from '../../../Utils/WorkoutsUtils/workoutPlanPageUtils'
import { CustomButton } from '../../CustomComponents/CustomButton'
import { useDispatch } from 'react-redux'



export const ConfirmDeleting = () => {

    const dispatch = useDispatch();


    return (
        <Box py={2}>
            <Text fontSize={18}>
                Are you sure you want to delete the entire workout plan?
            </Text>
            <Text color='red'>
                This operation is irreversible.
            </Text>
            <Box display='flex' justifyContent='center' alignItems='center'>
            <CustomButton
                mt={3}
                leftIcon={FaTrash}
                buttonText='Delete whole workout plan'
                onClick={() => handleResetState(dispatch, resetState, resetWorkoutPlanStates)}
            />
            </Box>
        </Box>
    )
}