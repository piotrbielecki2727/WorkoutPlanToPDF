import React, { useState } from 'react'
import { FaCalendarPlus, FaPlus, FaUpload } from "react-icons/fa";
import { CustomModal } from '../CustomComponents/CustomModal';
import NewWorkoutPlanForm from './NewWorkoutPlanForm';
import { useDispatch } from 'react-redux';
import { CustomButton } from '../CustomComponents/CustomButton';
import { handleCloseModal, handleOpenModal } from '../../Utils/SideBarContentUtils/WorkoutPlanPageUtils';
import { Box, Flex } from '@chakra-ui/react';
import '../CustomComponents/CustomButton.css';
import { DisplayWorkouts } from './DisplayWorkouts';
import NewWorkoutForm from './NewWorkoutForm';
import { useWorkoutPlanSelector } from '../../Hooks/useWorkoutPlanSelector';
import { useWorkoutPlanStatesSelector } from '../../Hooks/useWorkoutPlanStatesSelector';


export const DisplaySideBarContent: React.FC = ({ }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();
    const workoutPlan = useWorkoutPlanSelector();
    const workoutPlanStates = useWorkoutPlanStatesSelector();

    return (
        <Box >
            <Flex justifyContent='center' alignItems='center' flexDirection='column'>
                {workoutPlanStates.isWorkoutPlanCreated && (
                    <>
                        <CustomModal
                            isOpen={isModalOpen}
                            onOpenModal={() => handleOpenModal(setIsModalOpen)}
                            onClose={() => handleCloseModal(setIsModalOpen)}
                            ModalBodyContent={<NewWorkoutForm onCloseModal={() => handleCloseModal(setIsModalOpen)} />}
                            HeaderText='Enter workout name'
                            leftIcon={FaPlus}
                            buttonText='Add workout to current plan'
                            mt={5}
                            w={250}
                            fontSize={16}
                            
                        />
                    </>
                )}

                {workoutPlanStates.doWorkoutsExist && (
                    <>
                        <DisplayWorkouts workoutPlanStates={workoutPlanStates} workoutPlan={workoutPlan} />
                    </>)
                }
            </Flex>
        </Box >
    )
}