import { Box, Divider, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import logo from '../Assets/logoNew.png';
import { useWorkoutPlanStatesSelector } from '../Hooks/useWorkoutPlanStatesSelector';
import { FaCalendarPlus, FaUpload } from 'react-icons/fa';
import { CustomButton } from '../Components/CustomComponents/CustomButton';
import { CustomModal } from '../Components/CustomComponents/CustomModal';
import { handleOpenModal, handleCloseModal } from '../Utils/SideBarContentUtils/WorkoutPlanPageUtils';
import startPageBg from '../Assets/startpageBg.jpg';
import WorkoutPlanForm from '../Components/WorkoutPlan/CreateAndEditWorkoutPlan/WorkoutPlanForm';

type Props = {}

export const StartPage = (props: Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const workoutPlanStates = useWorkoutPlanStatesSelector();



    return (
        <Box background={`linear-gradient(rgba(11, 255, 0, 0.1), rgba(11, 255, 0, 0.2), rgba(11, 255, 0, 0.2), rgba(11, 255, 0, 0.1)), url(${startPageBg})`}
            backgroundSize="cover" backgroundPosition="center" display='flex' justifyContent='center' alignItems='center' h='100vh' color='black'>
            <Box boxShadow='2px 6px 10px 1px rgba(0, 0, 0, 0.4)' borderRadius={10} maxW={{ base: '330px', md: '430px' }} h='450px' bg='white' color='white'>
                <Box bg='black' borderRadius='10px 10px 0px 0px'>
                    <Image p={7} src={logo} />
                </Box>
                <Box borderRadius='0px 0px 10px 10px' bg='white' color='black' display='flex' justifyContent='center' alignItems='center' flexDirection='column' p={8}>
                    <Text fontSize={27} textAlign='center'>Welcome to WorkoutPlanner!</Text>
                    <Box w={{ base: '290px', md: '380px' }} h={1} mt={1} mb={1} borderRadius={10} bg='#0bff00' color='white'>.</Box>
                    <Text mt={2} fontSize={20} textAlign='center'>Create personalized workout plans with ease!</Text>
                    {!workoutPlanStates.isWorkoutPlanCreated && (
                        <>
                            <CustomModal
                                mt={5}
                                isOpen={isModalOpen}
                                onOpenModal={() => handleOpenModal(setIsModalOpen)}
                                onClose={() => handleCloseModal(setIsModalOpen)}
                                ModalBodyContent={<WorkoutPlanForm isEditing={false} onCloseModal={() => handleCloseModal(setIsModalOpen)} />}
                                HeaderText='Enter workout plan details...'
                                leftIcon={FaCalendarPlus}
                                buttonText='Create new workout plan'
                            />

                            <Text mt={3} mb={3}>Or</Text>
                            <CustomButton className='ButtonStyle' leftIcon={FaUpload} buttonText='Load existing workout plan' />
                        </>
                    )}
                </Box>
            </Box>

        </Box>
    )
}