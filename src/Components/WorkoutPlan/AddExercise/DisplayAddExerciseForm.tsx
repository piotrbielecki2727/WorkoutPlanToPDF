import React, { FC, useState } from 'react';
import { Exercise, ExerciseErrors } from '../../../Types';
import { FormControl, FormLabel, Input, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, FormErrorMessage, Box, SimpleGrid, Checkbox, CheckboxGroup, Stack, Button, Menu, MenuButton, MenuItem, MenuList, Grid, GridItem, Text } from '@chakra-ui/react';
import { CustomButton } from '../../CustomComponents/CustomButton';
import { FaBoxOpen, FaFilter, FaPlus } from 'react-icons/fa';
import { FilterExercises } from './FilterExercises';
import { SearchResults } from './SearchResults';

interface Props {
    exercise: Exercise;
    onExerciseChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSetChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFormSubmit: () => void;
    validationErrors: ExerciseErrors,
}

export const DisplayAddExerciseForm: FC<Props> = ({ validationErrors, onFormSubmit, exercise, onExerciseChange, onSetChange }) => {

    const [choosedBodyPart, setChoosedBodyPart] = useState<string>('');

    return (
        <>
            <form>

                <FormControl py={2} isInvalid={!!validationErrors.NameError}>
                    <FormLabel>Exercise: </FormLabel>
                    <FilterExercises choosedBodyPart={choosedBodyPart} setChoosedBodyPart={setChoosedBodyPart} />
                    <Input placeholder='Type to search...' border='1px solid #b8b6b6' borderRadius='5px 10px 0px 0px' name="Name" required type='text' value={exercise.Name} onChange={onExerciseChange} minLength={5} />
            
                        <SearchResults choosedBodyPart={choosedBodyPart} searchValue={exercise.Name} />
      
                    <FormErrorMessage>{validationErrors.NameError}</FormErrorMessage>
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

                <Box display='flex' justifyContent='center' alignItems='center' py={2} >
                    <CustomButton onClick={onFormSubmit} leftIcon={FaPlus} buttonText="Add new exercise"></CustomButton>
                </Box>


            </form >
        </>
    );
}

