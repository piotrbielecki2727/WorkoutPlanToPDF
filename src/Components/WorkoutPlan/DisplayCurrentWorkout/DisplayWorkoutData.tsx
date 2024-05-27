import { Td, Tr } from "@chakra-ui/react";
import { Workout } from "../../../Types";
import { CustomButton } from "../../CustomComponents/CustomButton";
import { deleteChoosedExercise } from "../../../Utils/CurrentWorkoutUtils/deleteChoosedExercise";
import { FaEdit, FaTrash } from "react-icons/fa";
import { FC, useState } from "react";
import { CustomIconButton } from "../../CustomComponents/CustomIconButton";
import { capitalizeFirstLetter } from "../../../Utils/CurrentWorkoutUtils/capitalizeFirstLetter";
import { CustomModal } from "../../CustomComponents/CustomModal";
import FormAddExerciseToWorkout from "../AddExercise/FormAddExerciseToWorkout";
import { closeModal, openModal } from "../../../Utils/ModalUtils";
import { handleCloseModal, handleOpenModal } from "../../../Utils/WorkoutsUtils/handleCloseAndOpenModal";
import { DisplayAddExerciseForm } from "../AddExercise/DisplayAddExerciseForm";

interface Props {
    currentWorkout: Workout,
    dispatch: Function,
}


export const DisplayWorkoutData: FC<Props> = ({ currentWorkout, dispatch }) => {
    const [modalOpenState, setModalOpenState] = useState<{ [key: string]: boolean }>({});

    return (
        <>
            {currentWorkout.Exercises.map((exercise, exerciseIndex) => {
                const tableDataCells = [capitalizeFirstLetter(exercise.Name), capitalizeFirstLetter(exercise.Muscle), exercise.Sets.Sets, exercise.Sets.Reps, exercise.Sets.Weight, exercise.Sets.Rest];
                return (
                    <Tr key={`${exerciseIndex}`}>
                        <Td textAlign='center' fontSize={18} borderRight='1px solid #363636 !important' borderBottom='1px solid #363636 !important'>{exerciseIndex + 1}</Td>
                        {tableDataCells.map((tableDataCell) => {
                            return <Td fontSize={16} textAlign='center' borderRight='1px solid #363636 !important' borderBottom='1px solid #363636 !important'>{tableDataCell}</Td>
                        })}
                        <Td borderRight='1px solid #363636 !important' borderBottom='1px solid #363636 !important' textAlign='center'>
                            <CustomIconButton onClick={() => deleteChoosedExercise(dispatch, currentWorkout.Id, exercise.Name)}
                                icon={<FaTrash fontSize={20} />} aria_label={"deleteExerciseButton"} />
                            <CustomModal
                                isOpen={modalOpenState[exercise.Id] || false}
                                onClose={() => closeModal(exercise.Id, setModalOpenState)}
                                ModalBodyContent={<FormAddExerciseToWorkout editingExerciseId={exercise.Id} onCloseModal={() => closeModal(exercise.Id, setModalOpenState)} />}
                                HeaderText='Enter workout plan details...'
                                buttonType={<CustomIconButton fontSize={22} icon={<FaEdit />} aria_label="editExerciseButton" onClick={() => openModal(exercise.Id, setModalOpenState)}  />}

                            />

                        </Td>
                    </Tr>
                )
            }
            )}
        </>
    )
}


