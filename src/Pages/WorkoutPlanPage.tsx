import React, { useState } from 'react'
import { FaCalendarPlus } from "react-icons/fa";
import './WorkoutPlanPage.css';
import '../Components/CustomButton.css';
import { CustomModal } from '../Components/CustomModal';
import { DisplayWorkoutPlan } from '../Components/DisplayWorkoutPlan';
import WorkoutPlanForm from '../Components/WorkoutPlanForm';
import { useDispatch } from 'react-redux';
import { resetState } from '../State/WorkoutPlan/workoutPlanSlice';
import { CustomButton } from '../Components/CustomButton';


import { handleCloseModal, handleOpenModal, handleResetState } from '../Utils/WorkoutPlanPageUtils';


export const WorkoutPlanPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isWorkoutPlanCreated, setIsWorkoutPlanCreated] = useState(false);
    const dispatch = useDispatch();

 
    return (
        <div className='MainPage'>
            {!isWorkoutPlanCreated ? (
                <CustomModal
                isOpen={isModalOpen}
                onOpenModal={() => handleOpenModal(setIsModalOpen)}
                onClose={() => handleCloseModal(setIsModalOpen, setIsWorkoutPlanCreated)}
                ModalBodyContent={<WorkoutPlanForm onCloseModal={() => handleCloseModal(setIsModalOpen, setIsWorkoutPlanCreated)} />}
                HeaderText='Enter workout plan details...'
                leftIcon={FaCalendarPlus}
                />) : (

                    <CustomButton className='ButtonStyle' buttonText='Usun trening' onClick={() => handleResetState(setIsWorkoutPlanCreated, dispatch, resetState)}></CustomButton>

            )}

            <DisplayWorkoutPlan />
        </div>
    )
}