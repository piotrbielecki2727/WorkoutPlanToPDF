import { Box, Flex, IconButton, SimpleGrid, Td, Tr } from "@chakra-ui/react"
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
                    <Td maxW='100px' borderRight='1px solid #363636 !important' borderBottom='1px solid #363636 !important' textAlign='center'>{workout.Name}</Td>
                    <Td maxW='130px' textAlign='center' borderBottom='1px solid #363636  !important' color='white'>
                        <Flex flexDirection='row' justifyContent='center'  >
                            <CustomIconButton fontSize={20} onClick={() => deleteChoosedWorkout(workout.Id, dispatch)} icon={<FaTrash />} aria_label={"deleteChoosedWorkoutButton"} />


                            <CustomModal
                                ModalBodyContent={<WorkoutForm ActualWorkoutName={workout.Name} ActualWorkoutId={workout.Id} isEditing={true} onCloseModal={() => closeModal(workout.Id, setModalOpenState)} />}
                                isOpen={modalOpenState[workout.Id] || false}
                                onClose={() => closeModal(workout.Id, setModalOpenState)}
                                HeaderText='Edit workout name'
                                buttonType={<CustomIconButton fontSize={20} aria_label="WorkoutEditIconButton" icon={<FaEdit />} onClick={() => openModal(workout.Id, setModalOpenState)} />}
                            />
                            <CustomIconButton fontSize={20} onClick={() => setCurrentWorkoutId(workout.Id, workoutPlanStates, dispatch)} icon={<FaTable />} aria_label={"setCurrentWorkoutIdButton"} />
                        </Flex>
                    </Td>
                </Tr>
            ))}
        </>
    );
}