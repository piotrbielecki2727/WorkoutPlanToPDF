import { Td, Tr } from "@chakra-ui/react";
import { Workout } from "../../../Types";
import { CustomButton } from "../../CustomComponents/CustomButton";
import { deleteChoosedExercise } from "../../../Utils/CurrentWorkoutUtils/deleteChoosedExercise";
import { FaTrash } from "react-icons/fa";
import { FC } from "react";
import { CustomIconButton } from "../../CustomComponents/CustomIconButton";

interface Props {
    currentWorkout: Workout,
    dispatch: Function,
}


export const DisplayWorkoutData: FC<Props> = ({ currentWorkout, dispatch }) => {
    return (
        <>
            {currentWorkout.Exercises.map((exercise, exerciseIndex) => {
                const tableDataCells = [exercise.Name, exercise.Muscle, exercise.Sets.Sets, exercise.Sets.Reps, exercise.Sets.Weight, exercise.Sets.Rest];
                return (
                    <Tr key={`${exerciseIndex}`}>
                        <Td textAlign='center' fontSize={18} borderRight='1px solid #363636 !important' borderBottom='1px solid #363636 !important'>{exerciseIndex + 1}</Td>
                        {tableDataCells.map((tableDataCell) => {
                            return <Td fontSize={16} textAlign='center' borderRight='1px solid #363636 !important' borderBottom='1px solid #363636 !important'>{tableDataCell}</Td>
                        })}
                        <Td borderRight='1px solid #363636 !important' borderBottom='1px solid #363636 !important'
                            textAlign='center'>
                            <CustomIconButton onClick={() => deleteChoosedExercise(dispatch, currentWorkout.Id, exercise.Name)}
                                icon={<FaTrash fontSize={20} />} aria_label={"deleteExerciseButton"} /></Td>
                    </Tr>
                )
            }
            )}
        </>
    )
}


