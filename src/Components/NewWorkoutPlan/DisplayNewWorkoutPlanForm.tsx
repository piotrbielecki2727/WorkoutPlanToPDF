import { Box, FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react"
import { FaSave } from "react-icons/fa"
import { CustomButton } from "../CustomComponents/CustomButton"
import {  Errors, WorkoutPlan } from "../../Types";



interface Props {
    workoutPlanData: WorkoutPlan;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFormSubmit: () => void;
    validationErrors: Errors,
}

export const DisplayNewWorkoutPlanForm: React.FC<Props> = ({ workoutPlanData, onInputChange, onFormSubmit, validationErrors }) => {
    return (

        <form >
            <Box py={5} >
                <FormControl isInvalid={!!validationErrors.NameError}>
                    <FormLabel>Workout plan name: </FormLabel>
                    <Input name="Name" required type='text' value={workoutPlanData.Name} onChange={onInputChange} />
                    <FormErrorMessage>{validationErrors.NameError}</FormErrorMessage>

                </FormControl>

                <FormControl isInvalid={!!validationErrors.PersonError}>
                    <FormLabel mt={3}>Person full name: </FormLabel>
                    <Input name="Person" required type='text' value={workoutPlanData.Person} onChange={onInputChange} />
                    <FormErrorMessage >{validationErrors.PersonError}</FormErrorMessage>

                </FormControl>

                <FormControl isInvalid={!!validationErrors.AuthorError}>
                    <FormLabel mt={3}>Author: </FormLabel>
                    <Input name="Author" required type='text' value={workoutPlanData.Author} onChange={onInputChange} />
                    <FormErrorMessage>{validationErrors.AuthorError}</FormErrorMessage>

                </FormControl>
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center'>
                <CustomButton mb={5} onClick={onFormSubmit} className="ButtonStyle" size="lg" leftIcon={FaSave} buttonText="Create workout plan"></CustomButton>

            </Box>

        </form >
    )
}