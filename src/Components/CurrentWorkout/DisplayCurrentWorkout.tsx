import { Box, Flex, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import './DisplayCurrentWorkouts.css'
import { CustomButton } from "../CustomComponents/CustomButton";
import { FaTrash } from "react-icons/fa";
import { useWorkoutPlanSelector } from "../../Hooks/useWorkoutPlanSelector";
import { useWorkoutPlanStatesSelector } from "../../Hooks/useWorkoutPlanStatesSelector";
import { findWorkout } from "../../Utils/CurrentWorkoutUtils/findWorkout";
import { DisplayCurrentWorkoutHeader } from "./DisplayCurrentWorkoutHeader";
import { DisplayWorkoutTable } from "./DisplayWorkoutTable";



export const DisplayCurrentWorkout: React.FC = () => {

    const workoutPlan = useWorkoutPlanSelector();
    const workoutPlanStates = useWorkoutPlanStatesSelector();
    const currentWorkout = findWorkout(workoutPlanStates.CurrentWorkoutId, workoutPlan);


    return (
        <>
            {currentWorkout ? (
                <>
                    <DisplayCurrentWorkoutHeader currentWorkout={currentWorkout} />
                    <DisplayWorkoutTable />
                </>
            ) : (
                <>
                </>
            )}
        </>)
}