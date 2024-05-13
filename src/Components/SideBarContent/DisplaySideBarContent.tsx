import { FC, useState } from 'react'
import { FaCalendarPlus, FaEdit, FaPlus } from "react-icons/fa";
import { CustomModal } from '../CustomComponents/CustomModal';
import { Box, Flex } from '@chakra-ui/react';
import '../CustomComponents/CustomButton.css';
import { DisplayWorkouts } from './Workouts/DisplayWorkouts';
import { useWorkoutPlanSelector } from '../../Hooks/useWorkoutPlanSelector';
import { useWorkoutPlanStatesSelector } from '../../Hooks/useWorkoutPlanStatesSelector';
import WorkoutPlanForm from '../WorkoutPlan/CreateAndEditWorkoutPlan/WorkoutPlanForm';
import { CustomButton } from '../CustomComponents/CustomButton';
import WorkoutForm from './Workouts/WorkoutForm';
import { handleCloseModal, handleOpenModal } from '../../Utils/WorkoutsUtils/handleCloseAndOpenModal';
import { useDispatch } from 'react-redux';


export const DisplaySideBarContent: FC = ({ }) => {
    const [isNewWorkoutPlanModalOpen, setNewWorkoutPlanModalOpen] = useState(false);
    const [isNewWorkoutModalOpen, setNewWorkoutModalOpen] = useState(false);
    const dispatch = useDispatch();
    const workoutPlan = useWorkoutPlanSelector();
    const workoutPlanStates = useWorkoutPlanStatesSelector();

    return (
        <Box >
            <Flex justifyContent='center' alignItems='center' flexDirection='column'>

                <CustomModal
                    isOpen={isNewWorkoutPlanModalOpen}
                    onClose={() => handleCloseModal(setNewWorkoutPlanModalOpen)}
                    ModalBodyContent={<WorkoutPlanForm isEditing={true} onCloseModal={() => handleCloseModal(setNewWorkoutPlanModalOpen)} />}
                    HeaderText='Enter workout plan details...'
                    buttonType={<CustomButton mt={5} mb={5} buttonText='Edit workout plan' leftIcon={FaEdit} onClick={() => handleOpenModal(setNewWorkoutPlanModalOpen)} />}

                />

                <CustomModal
                    isOpen={isNewWorkoutModalOpen}
                    onClose={() => handleCloseModal(setNewWorkoutModalOpen)}
                    ModalBodyContent={<WorkoutForm onCloseModal={() => handleCloseModal(setNewWorkoutModalOpen)} />}
                    HeaderText='Enter workout name'
                    buttonType={<CustomButton buttonText='Add new workout' leftIcon={FaPlus} onClick={() => handleOpenModal(setNewWorkoutModalOpen)} />}

                />



                {workoutPlanStates.doWorkoutsExist && (
                    <>
                        <DisplayWorkouts workoutPlanStates={workoutPlanStates} workoutPlan={workoutPlan} dispatch={dispatch} />
                    </>)
                }
            </Flex>
        </Box >
    )
}