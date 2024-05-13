import { Box, FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react"
import { FaPlus, FaSave } from "react-icons/fa"
import { CustomButton } from "../../CustomComponents/CustomButton"
import { Errors, WorkoutPlan } from "../../../Types";
import { FC } from "react";



interface Props {
    workoutPlanData: WorkoutPlan;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFormSubmit: () => void;
    validationErrors: Errors,
    isEditing: boolean,
    editedData: WorkoutPlan
}

export const DisplayWorkoutPlanForm: FC<Props> = ({ editedData, isEditing, workoutPlanData, onInputChange, onFormSubmit, validationErrors }) => {

    return (

        <form >
            <Box py={2} >
                <FormControl isInvalid={!!validationErrors.NameError}>
                    <FormLabel>Workout plan name: </FormLabel>
                    <Input border='1px solid #b8b6b6' name="Name" required type='text' value={isEditing ? editedData.Name : workoutPlanData.Name} onChange={onInputChange} />
                    <FormErrorMessage>{validationErrors.NameError}</FormErrorMessage>

                </FormControl>

                <FormControl isInvalid={!!validationErrors.PersonError}>
                    <FormLabel mt={3}>Person full name: </FormLabel>
                    <Input border='1px solid #b8b6b6' name="Person" required type='text' value={isEditing ? editedData.Person : workoutPlanData.Person} onChange={onInputChange} />
                    <FormErrorMessage >{validationErrors.PersonError}</FormErrorMessage>

                </FormControl>

                <FormControl isInvalid={!!validationErrors.AuthorError}>
                    <FormLabel mt={3}>Author: </FormLabel>
                    <Input border='1px solid #b8b6b6' name="Author" required type='text' value={isEditing ? editedData.Author : workoutPlanData.Author} onChange={onInputChange} />
                    <FormErrorMessage>{validationErrors.AuthorError}</FormErrorMessage>

                </FormControl>
            </Box>
            <Box h='80px' display='flex' justifyContent='center' alignItems='center'>
                <CustomButton onClick={onFormSubmit} leftIcon={isEditing ? FaSave : FaPlus} buttonText={isEditing ? "Edit workout plan" : "Create workout plan"}></CustomButton>
            </Box>

        </form >
    )
}