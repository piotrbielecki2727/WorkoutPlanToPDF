import { Flex, IconButton, Td, Tr } from "@chakra-ui/react"
import { FaEdit, FaTable, FaTrash } from "react-icons/fa"
import { WorkoutPlan, WorkoutPlanStatesTypes } from "../../Types"
import { setCurrentWorkoutId } from "../../Utils/SideBarContentUtils/setCurrentWorkoutId"
import { deleteChoosedWorkout } from "../../Utils/SideBarContentUtils/deleteChoosedWorkout"
import { CustomModal } from "../CustomComponents/CustomModal"
import { handleCloseModal, handleOpenModal } from "../../Utils/SideBarContentUtils/WorkoutPlanPageUtils"
import WorkoutForm from "./WorkoutForm"
import { useState } from "react"
import { CustomButton } from "../CustomComponents/CustomButton"
import { CustomIconButton } from "../CustomComponents/CustomIconButton"



export const DisplayCreatedWorkouts = (workoutPlan: WorkoutPlan, workoutPlanStates: WorkoutPlanStatesTypes, dispatch: Function) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return workoutPlan.Workouts.map((workout) => (

        <Tr key={workout.Id}>
            <Td maxW={100} borderRight='1px solid #363636 !important' borderBottom='1px solid #363636 !important' textAlign='center'>{workout.Name}</Td>
            <Td maxW={100} textAlign='center' borderBottom='1px solid #363636  !important'>
                <Flex justifyContent='center' gap={1} alignItems='center'>
                    <IconButton onClick={() => deleteChoosedWorkout(workout.Id, dispatch)} textAlign='center' className="ActionButton" size='sm' icon={<FaTrash size='20px' />} aria-label="2" />
                    <CustomModal
                        ModalBodyContent={<WorkoutForm ActualWorkoutId={workout.Id} ActualWorkoutName={workout.Name} isEditing={true} onCloseModal={() => handleCloseModal(setIsModalOpen)} />}
                        isOpen={isModalOpen}
                        onClose={() => handleCloseModal(setIsModalOpen)}
                        HeaderText='Confirm workout plan deleting'
                        buttonType={<CustomIconButton aria_label="WorkoutEditIconButton" icon={<FaEdit />} onClick={() => handleOpenModal(setIsModalOpen)} />}

                    />

                    <IconButton onClick={() => setCurrentWorkoutId(workout.Id, workoutPlanStates, dispatch)} textAlign='center' className="ActionButton" size='sm' icon={<FaTable size='20px' style={{ marginLeft: '4px' }} />} aria-label="1" />

                </Flex>
            </Td>
        </Tr>
    ))

}