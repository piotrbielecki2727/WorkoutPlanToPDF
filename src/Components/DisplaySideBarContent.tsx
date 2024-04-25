import React, { useState } from 'react'
import { FaCalendarPlus, FaCreativeCommons, FaDownload, FaPlus, FaTrash, FaUpload } from "react-icons/fa";
import { CustomModal } from './CustomModal';
import { DisplayWorkoutPlan } from './DisplayWorkoutPlan';
import WorkoutPlanForm from './WorkoutPlanForm';
import { useDispatch, useSelector } from 'react-redux';
import { resetState } from '../State/WorkoutPlan/workoutPlanSlice';
import { resetWorkoutPlanStates } from '../State/WorkoutPlan/workoutPlanStatesSlice';
import { CustomButton } from './CustomButton';
import { handleCloseModal, handleOpenModal, handleResetState } from '../Utils/WorkoutPlanPageUtils';
import { Box, Flex, Text } from '@chakra-ui/react';
import '../Components/CustomButton.css';
import { DisplayWorkouts } from './DisplayWorkouts';
import NewWorkoutForm from './NewWorkoutForm';
import { WorkoutPlan, WorkoutPlanStatesTypes } from '../Types';
import { RootState } from '../State/store';


export const DisplaySideBarContent: React.FC = ({}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();
    const workoutPlan: WorkoutPlan = useSelector((state: RootState) => state.workoutPlan.workoutPlan);
    const workoutPlanStates: WorkoutPlanStatesTypes = useSelector((state: RootState) => state.workoutPlanStates.workoutPlanStates);




    return (
        <Box >

            <Flex justifyContent='center' alignItems='center' flexDirection='column'>

                {!workoutPlanStates.isWorkoutPlanCreated ? (
                    <>
                        <CustomModal
                            mt={5}
                            isOpen={isModalOpen}
                            onOpenModal={() => handleOpenModal(setIsModalOpen)}
                            onClose={() => handleCloseModal(setIsModalOpen)}
                            ModalBodyContent={<WorkoutPlanForm onCloseModal={() => handleCloseModal(setIsModalOpen)} />}
                            HeaderText='Enter workout plan details...'
                            leftIcon={FaCalendarPlus}
                            buttonText='Create workout plan'
                        />
                        <CustomButton mt={5} className='ButtonStyle' leftIcon={FaUpload} size='lg' buttonText='Load existing workout plan' />
                    </>
                ) : (
                    <>
                        <CustomButton mt={5} className='ButtonStyle' leftIcon={FaDownload} size='lg' buttonText='Convert workout plan to PDF' />
                        <CustomButton mt={5} size='lg' leftIcon={FaTrash} className='ButtonStyle' buttonText='Delete training plan' onClick={() => handleResetState(dispatch, resetState, resetWorkoutPlanStates)}></CustomButton>
                        <DisplayWorkoutPlan workoutPlanStates={workoutPlanStates} workoutPlan={workoutPlan} />

                        <CustomModal
                            isOpen={isModalOpen}
                            onOpenModal={() => handleOpenModal(setIsModalOpen)}
                            onClose={() => handleCloseModal(setIsModalOpen)}
                            ModalBodyContent={<NewWorkoutForm  onCloseModal={() => handleCloseModal(setIsModalOpen)} />}
                            HeaderText='Enter workout name'
                            leftIcon={FaPlus}
                            buttonText='Add workout to current plan'
                        />

                        {!workoutPlanStates.doWorkoutsExist ? (<></>) : (<>

                            <DisplayWorkouts workoutPlan={workoutPlan} /></>)}

                    </>

                )}




            </Flex>

        </Box>
    )
}