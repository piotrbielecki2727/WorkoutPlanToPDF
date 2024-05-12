import { Flex, IconButton, Td, Tr } from "@chakra-ui/react"
import { FaEdit, FaTable, FaTrash } from "react-icons/fa"
import { FC, useState } from "react"
import { WorkoutPlan, WorkoutPlanStatesTypes } from "../../../Types";
import { CustomIconButton } from "../../CustomComponents/CustomIconButton";
import { CustomModal } from "../../CustomComponents/CustomModal";
import WorkoutForm from "./WorkoutForm";
import { deleteChoosedWorkout } from "../../../Utils/WorkoutsUtils/deleteChoosedWorkout";
import { setCurrentWorkoutId } from "../../../Utils/WorkoutsUtils/setCurrentWorkoutId";
import { closeModal, openModal } from "../../../Utils/ModalUtils";


interface Props {
    workoutPlan: WorkoutPlan,
    workoutPlanStates: WorkoutPlanStatesTypes,
    dispatch: Function,
}


export const DisplayCreatedWorkouts: FC<Props> = ({ workoutPlan, workoutPlanStates, dispatch }) => {
    const [modalOpenState, setModalOpenState] = useState<{ [key: string]: boolean }>({});

    return (
        <>
            {workoutPlan.Workouts.map((workout) => (
                <Tr key={workout.Id}>
                    <Td maxW={100} borderRight='1px solid #363636 !important' borderBottom='1px solid #363636 !important' textAlign='center'>{workout.Name}</Td>
                    <Td maxW={100} textAlign='center' borderBottom='1px solid #363636  !important'>
                        <Flex justifyContent='center' gap={1} alignItems='center'>
                            {workout.Id}
                            <IconButton onClick={() => deleteChoosedWorkout(workout.Id, dispatch)} textAlign='center' className="ActionButton" size='sm' icon={<FaTrash size='20px' />} aria-label="2" />
                            <CustomModal
                                ModalBodyContent={<WorkoutForm ActualWorkoutName={workout.Name} ActualWorkoutId={workout.Id} isEditing={true} onCloseModal={() => closeModal(workout.Id, setModalOpenState)} />}
                                isOpen={modalOpenState[workout.Id] || false}
                                onClose={() => closeModal(workout.Id, setModalOpenState)}
                                HeaderText='Edit workout name'
                                buttonType={<CustomIconButton aria_label="WorkoutEditIconButton" icon={<FaEdit />} onClick={() => openModal(workout.Id, setModalOpenState)} />}
                            />
                            <IconButton onClick={() => setCurrentWorkoutId(workout.Id, workoutPlanStates, dispatch)} textAlign='center' className="ActionButton" size='sm' icon={<FaTable size='20px' style={{ marginLeft: '4px' }} />} aria-label="1" />
                        </Flex>
                    </Td>
                </Tr>
            ))}
        </>
    );
}