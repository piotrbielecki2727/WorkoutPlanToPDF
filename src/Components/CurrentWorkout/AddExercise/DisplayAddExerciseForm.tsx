import React from 'react';
import { Exercise, ExerciseErrors } from '../../../Types';
import { FormControl, FormLabel, Input, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, FormErrorMessage, Box } from '@chakra-ui/react';
import { CustomButton } from '../../CustomComponents/CustomButton';
import { FaPlus, FaSave } from 'react-icons/fa';

interface Props {
    exercise: Exercise;
    onExerciseChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSetChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFormSubmit: () => void;
    validationErrors: ExerciseErrors,
}

export const DisplayAddExerciseForm: React.FC<Props> = ({ validationErrors, onFormSubmit, exercise, onExerciseChange, onSetChange }) => {
    return (
        <>
            <form>
                <FormControl py={2} isInvalid={!!validationErrors.NameError}>
                    <FormLabel>Exercise: </FormLabel>
                    <Input name="Name" required type='text' value={exercise.Name} onChange={onExerciseChange} minLength={5} />
                    <FormErrorMessage>{validationErrors.NameError}</FormErrorMessage>

                </FormControl>

                <FormControl py={2} isInvalid={!!validationErrors.MuscleError}>
                    <FormLabel>Muscle: </FormLabel>
                    <Input name="Muscle" required type='text' value={exercise.Muscle} onChange={onExerciseChange} />
                    <FormErrorMessage>{validationErrors.MuscleError}</FormErrorMessage>

                </FormControl>



                <FormControl py={2} >
                    <FormLabel>Sets: </FormLabel>
                    <NumberInput min={1} defaultValue={1}>
                        <NumberInputField name="Sets" onChange={onSetChange} value={exercise.Sets.Sets} />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </FormControl>


                <FormControl py={2} >
                    <FormLabel>Reps: </FormLabel>
                    <NumberInput defaultValue={5} min={1} max={150}>
                        <NumberInputField name="Reps" onChange={onSetChange} value={exercise.Sets.Reps} />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </FormControl>

                <FormControl py={2} >
                    <FormLabel>Weight: </FormLabel>
                    <NumberInput defaultValue={0} min={0} >
                        <NumberInputField name="Weight" onChange={onSetChange} value={exercise.Sets.Weight} />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </FormControl>

                <FormControl py={2} >
                    <FormLabel>Rest: </FormLabel>
                    <NumberInput defaultValue={3} min={1} >
                        <NumberInputField name="Rest" onChange={onSetChange} value={exercise.Sets.Rest} />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </FormControl>

                <Box py={2} textAlign='center'>
                    <CustomButton onClick={onFormSubmit} className="ButtonStyle" size="lg" leftIcon={FaPlus} buttonText="Add new exercise"></CustomButton>
                </Box>


            </form >
        </>
    );
}

