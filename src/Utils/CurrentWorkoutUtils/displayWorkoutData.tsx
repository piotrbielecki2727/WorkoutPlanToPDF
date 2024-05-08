import { Td, Tr } from "@chakra-ui/react";
import { Workout } from "../../Types";
import { CustomButton } from "../../Components/CustomComponents/CustomButton";
import { deleteChoosedExercise } from "./deleteChoosedExercise";
import { useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";



export const displayWorkoutData = (currentWorkout: Workout) => {


    {
        return currentWorkout.Exercises.map((exercise, exerciseIndex) => {
            const tableDataCells = [exercise.Name, exercise.Muscle, exercise.Sets.Sets, exercise.Sets.Reps, exercise.Sets.Weight, exercise.Sets.Rest];
            const dispatch = useDispatch()
            return (
                <Tr key={`${exerciseIndex}`}>
                    <Td textAlign='center' fontSize={18} borderRight='1px solid #363636 !important' borderBottom='1px solid #363636 !important'>{exerciseIndex + 1}</Td>
                    {tableDataCells.map((tableDataCell) => {
                        return <Td fontSize={16} textAlign='center' borderRight='1px solid #363636 !important' borderBottom='1px solid #363636 !important'>{tableDataCell}</Td>
                    })}
                    <Td borderRight='1px solid #363636 !important' borderBottom='1px solid #363636 !important' textAlign='center'><CustomButton onClick={() => deleteChoosedExercise(dispatch, currentWorkout.Id, exercise.Name)} ml={2} p={1} bg="black" leftIcon={FaTrash} /></Td>
                </Tr>
            );
        })
    }
}