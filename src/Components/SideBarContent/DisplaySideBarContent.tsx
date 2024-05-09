import { FC, useState } from 'react'
import { FaCalendarPlus, FaPlus } from "react-icons/fa";
import { CustomModal } from '../CustomComponents/CustomModal';
import { handleCloseModal, handleOpenModal } from '../../Utils/SideBarContentUtils/WorkoutPlanPageUtils';
import { Box, Flex } from '@chakra-ui/react';
import '../CustomComponents/CustomButton.css';
import { DisplayWorkouts } from './DisplayWorkouts';
import NewWorkoutForm from './NewWorkoutForm';
import { useWorkoutPlanSelector } from '../../Hooks/useWorkoutPlanSelector';
import { useWorkoutPlanStatesSelector } from '../../Hooks/useWorkoutPlanStatesSelector';
import WorkoutPlanForm from '../WorkoutPlan/CreateAndEditWorkoutPlan/WorkoutPlanForm';


export const DisplaySideBarContent: FC = ({ }) => {
    const [isNewWorkoutPlanModalOpen, setNewWorkoutPlanModalOpen] = useState(false);
    const [isNewWorkoutModalOpen, setNewWorkoutModalOpen] = useState(false);
    const workoutPlan = useWorkoutPlanSelector();
    const workoutPlanStates = useWorkoutPlanStatesSelector();

    return (
        <Box >
            <Flex justifyContent='center' alignItems='center' flexDirection='column'>

                <CustomModal
                    mt={5}
                    isOpen={isNewWorkoutPlanModalOpen}
                    onOpenModal={() => handleOpenModal(setNewWorkoutPlanModalOpen)}
                    onClose={() => handleCloseModal(setNewWorkoutPlanModalOpen)}
                    ModalBodyContent={<WorkoutPlanForm isEditing={true} onCloseModal={() => handleCloseModal(setNewWorkoutPlanModalOpen)} />}
                    HeaderText='Enter workout plan details...'
                    leftIcon={FaCalendarPlus}
                    buttonText='Edit workout plan'
                />

                <CustomModal
                    mt={5}
                    isOpen={isNewWorkoutModalOpen}
                    onOpenModal={() => handleOpenModal(setNewWorkoutModalOpen)}
                    onClose={() => handleCloseModal(setNewWorkoutModalOpen)}
                    ModalBodyContent={<NewWorkoutForm onCloseModal={() => handleCloseModal(setNewWorkoutModalOpen)} />}
                    HeaderText='Enter workout name'
                    leftIcon={FaPlus}
                    buttonText='Add workout to current plan'
                />



                {workoutPlanStates.doWorkoutsExist && (
                    <>
                        <DisplayWorkouts workoutPlanStates={workoutPlanStates} workoutPlan={workoutPlan} />
                    </>)
                }
            </Flex>
        </Box >
    )
}